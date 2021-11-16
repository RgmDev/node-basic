"use strict";

const bcrypt = require('bcrypt');

const models = require('../models');
const User = models.User;

const domain = process.env.DOMAIN;

function getAll(req, res){
  try{
    User.findAll({where: req.body}).then(users => {
      res.json(users);
    }).catch(err => {
      res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
  
}

function getById(req, res){
  try{
    User.findByPk(req.params.id).then(user => {
      res.json(user);
    }).catch(err => {
      res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
}

function create(req, res){
  try{
    let user = req.body;
    bcrypt.hash(user.password, 10, (err, hash) => {
      user.password = hash;
      User.create(user).then((user) => {
        res.json(user);
      }).catch(err => {
        res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
      })
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
}

function update(req, res){
  try{
    User.findByPk(req.params.id).then(user => {
      User.update(req.body, { where: { id: user.id }}).then(() => {
        res.status(400).send(user)
      }).catch(err => {
        res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
      })  
    }).catch(err => {
      res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
}

function destroy(req, res){
  try{
    User.findByPk(req.params.id).then(user => {
      let id = user ? user.id : 0;
      User.destroy({ where: { id: user.id }}).then(() => {
        res.json(user)
      }).catch(err => {
        res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
      })    
    }).catch(err => {
      res.status(400).send({error: true, message: 'Bad Request', data: err.errors});
    })
  }catch(err){
    res.status(500).send({error: true, message: 'Interval Server Error'});
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
}