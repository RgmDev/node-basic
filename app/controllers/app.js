"use strict";

const bcrypt = require('bcrypt');
const moment = require('moment');
const path = require('path');
const fs = require('fs');
const multer  = require('multer');

const jwt = require('../config/jwt');

const models = require('../models');
const User = models.User;

const domain = process.env.DOMAIN;

function login(req, res){
  try{
    User.findOne({where : { email: req.body.email }}).then(user => {
      if(user){
        bcrypt.compare(req.body.password, user.password, (err, check) => {
          if(check){
            res.json({ token: jwt.createToken(user), user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, avatar: user.avatar } });
          }else{
            res.status(401).send({error: true, message: 'Unauthorized'});
          }
        })
      }else{
        res.status(401).send({error: true, message: 'Unauthorized'});
      }
    }).catch(err => {
      res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
}

function uploadFile(req, res){
  let type = req.params.type;
  let group = req.params.group;
  let directory = path.join(__dirname, '../assets', type, group);
  if(!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, directory);
    },
    filename: function (req, file, cb) {
      cb(null, moment().unix()+'_'+Math.floor(Math.random() * 10000)+path.extname(file.originalname));
    }
  }); 
  var upload = multer({ storage: storage }).single('file');
  upload(req, res, function(err){
    if (req.fileValidationError) {
      return res.status(500).send({error: true, message: 'Internal Server Error', data: req.fileValidationError});
    }
    else if (!req.file) {
      return res.status(400).send({error: true, message: 'Bad Request'});
    }
    else if (err instanceof multer.MulterError) {
      return res.status(500).send({error: true, message: 'Internal Server Error', data: err});
    }
    else if (err) {
      return res.status(500).send({error: true, message: 'Internal Server Error', data: err});
    }
    res.status(200).send({
      name: path.basename(req.file.path),
      url: domain+'/api/getFile/'+type+'/'+group+'/'+path.basename(req.file.path)
    });
  });
}

function getFile(req, res){
  let type = req.params.type;
  let group = req.params.group;
  let filename = req.params.filename;
  let file = path.join(__dirname, '../assets', type, group, filename);
  if(fs.existsSync(file)) {
    return res.sendFile(file);
  }
  res.status(400).send({error: true, message: 'File Not Found.'});
  
}

module.exports = {
  login,
  uploadFile,
  getFile
}