<div id="top"></div>


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RgmDev/node-basic">
    <img src="https://miro.medium.com/max/724/1*-igaI4IhZkeNWhESz1D9sw.png" alt="Logo" width="220">
  </a>

  <h3 align="center">Basic API nodejs</h3>

  <p align="center">
    An API template with users, login, JWT, upload & get files...
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RgmDev/node-basic">View Demo</a>
    ·
    <a href="https://github.com/RgmDev/node-basic/issues">Report Bug</a>
    ·
    <a href="https://github.com/RgmDev/node-basic/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Node and MySQL API include:

* ORM for manage de database
* CRUD endpoints for user data
* Identify with JWT
* Upload and get data from the server
* Log all the HTTP request

<p align="right"><a href="#top">:arrow_double_up:</a></p>



### Built With

Frameworks/libraries used to bootstrap the project.

* [Express](https://nextjs.org/)
* [Sequelize ORM](https://sequelize.org/)
* [Morgan](https://github.com/expressjs/morgan#readme)
* [Multer](https://github.com/expressjs/multer#readme)

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Install [node](https://nodejs.org/es/) and [mysql](https://dev.mysql.com/downloads/mysql/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone git@github.com:RgmDev/node-basic.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create Mysql database and user with privileges
   ```mysql
   create database dbname;
   create user 'dbuser'@'%' identified by 'password'
   grant all privileges on namedb.* to 'dbuser'@'%';
   flush privileges;
   ```

4. Copy .env.example to .env and configure environment and database conection
   ```sh
   # APP
   DOMAIN=http://localhost:3000

   # DATABASE
   DB_HOST=localhost
   DB_USER=dbuser
   DB_PASS=password
   DB_NAME=dbname

   # JWT
   JWT_KEY=secretkey
   ```

5. Execute migration and sedder with sequelize-cli
   ```sh
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
6. Run the project
   ```sh
   npm start
   ```

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

The user included in seeder: email `admin@mail.com` and password `Password123`

Include a Postman collection and environment to easily testing

Endpoints List:

- Users 

`GET /api/users`

`GET /api/users/:id`

`POST /api/users`

`PUT /api/users/:id`

`DELETE /api/users/:id`


- App 

`POST /api/auth/login`

`POST /api/uploadFile/:type/:group`

`GET /api/uploadFile/:type/:group/:filename`

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Readme
- [x] Add Licence
- [x] Add Postman collection and environment
- [ ] Others in the future


See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- CONTACT -->
## Contact

Rubén González Martín [:mailbox:](rubengm410@gmail.com)

Project Link: [https://github.com/RgmDev/node-basic](https://github.com/RgmDev/node-basic)

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Postman API development](https://www.postman.com/)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)

<p align="right"><a href="#top">:arrow_double_up:</a></p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/RgmDev/node-basic
[contributors-url]: https://github.com/RgmDev/node-basic/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RgmDev/node-basic
[forks-url]: https://github.com/RgmDev/node-basic/network/members
[stars-shield]: https://img.shields.io/github/stars/RgmDev/node-basic
[stars-url]: https://github.com/RgmDev/node-basic/stargazers
[issues-shield]: https://img.shields.io/github/issues/RgmDev/node-basic
[issues-url]: https://github.com/RgmDev/node-basic/issues
[license-shield]: https://img.shields.io/github/license/RgmDev/node-basic
[license-url]: https://github.com/RgmDev/node-basic/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=0e76a8
[linkedin-url]: https://www.linkedin.com/in/ruben-gonzalez-martin/
