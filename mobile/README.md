<p align="center">
   <img alt="be the hero app" src="https://res.cloudinary.com/mikemoura/image/upload/v1592004830/be-the-hero/be-the-hero_picture_ghkh5h.png"/>
</p>

# Be The Hero


[![Author](https://img.shields.io/badge/author-mikemorcerf-EE4D64?style=flat-square)](https://github.com/mikemorcerf)
[![Languages](https://img.shields.io/github/languages/count/mikemorcerf/be-the-hero-app?color=%23EE4D64&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/mikemorcerf/be-the-hero-app?color=EE4D64&style=flat-square)](https://github.com/mikemorcerf/be-the-hero-app/stargazers)
[![Forks](https://img.shields.io/github/forks/mikemorcerf/be-the-hero-app?color=%23EE4D64&style=flat-square)](https://github.com/mikemorcerf/be-the-hero-app/network/members)

> Where organizations can find heroes to help them solving incidents :gift_heart:

---

# :pushpin: Table of Contents

* [Technologies](#wrench-technologies)
* [Features](#rocket-features)
* [Installation and Getting started](#construction_worker-installation-and-getting-started)
* [How to Use](#feet-how-to-use)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Acknowledgment](#clap-acknowledgment)
* [License](#closed_book-license)


# :wrench: Technologies

*  [Axios](https://github.com/axios/axios)
*  [Celebrate](https://github.com/arb/celebrate)
*  [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
*  [Dotenv](https://github.com/motdotla/dotenv)
*  [Expo](https://expo.io/)
*  [Express](https://expressjs.com/)
*  [Knex](http://knexjs.org/)
*  [Node.js](https://nodejs.org/en/)
*  [PostgreSQL](https://www.postgresql.org/)
*  [ReactJS](https://reactjs.org/)
*  [React Icons](https://react-icons.github.io/react-icons/)
*  [React Native](https://reactnative.dev/)
*  [React Router v4](https://github.com/ReactTraining/react-router)
*  [Sqlite3](https://www.sqlite.org/index.html)

# :rocket: Features

* Organizations can post incidents they need help with
* Users can find incidents organizations need help with and connect with the organizations to learn how to help them

# :construction_worker: Installation and Getting Started

```bash
# Clone this repository
$ git clone https://github.com/mikemorcerf/be-the-hero-app.git

# Go into the repository
$ cd be-the-hero-app

# Go into backend
$ cd backend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn start

# On another terminal, go to the frontend folder
$ cd ../frontend

# Install dependencies
$ yarn install

# Start the frontend server
$ yarn start

# On another terminal, go to the mobile folder
$ cd ../mobile

# Install dependencies
$ yarn install

# If you want to run the project on a simulador, start the react-native server as it is
$ react-native start

# On another terminal, install the app on your simulator
# Use the command below for iOS devices
$ react-native run-ios --simulator="iPhone XS Max"

# Use the command below for Android devices
$ react-native run-android

# If you want to run the project on your smartphone, change the baseURL on src/services/api.js to your machine's ethernet adapter IP. Use the ethernet adapter IP if you're on a cable connection or the WiFi adapter IP if you're on a wireless conecction.
# After changing the baseURL, start the react-native server
$ react-native start

# On another terminal, install the app on your smartphone
# Use the command below for iOS devices
$ react-native run-ios

# Use the command below for Android devices
$ react-native run-android
```
# :feet: How to Use

[Working Online Demo](https://frontend-bethehero.netlify.app/)
</br>
Organizations must sign up using the web version of Be The Hero application.
<p align="center">
   <img alt="be the hero instructions" src="https://res.cloudinary.com/mikemoura/image/upload/v1592081220/be-the-hero/instructions/be-the-hero_instructions_1_nijsfd.png"/>
</p>
After filling up the sign up form and clicking "Register", an unique ID will be generated.
</br>
This ID must be stored in secret so just the Organization that created the profile can post incidents.
<p align="center">
   <img alt="be the hero instructions picture" src="https://res.cloudinary.com/mikemoura/image/upload/v1592081220/be-the-hero/instructions/be-the-hero_instructions_2_firo4x.png"/>
</p>
The Organization must use the ID that was generated to access their Dashboard.
<p align="center">
   <img alt="be the hero instructions picture" src="https://res.cloudinary.com/mikemoura/image/upload/v1592081220/be-the-hero/instructions/be-the-hero_instructions_3_lwsgdv.png"/>
</p>
In the Dashboard, Organizations can see all incidents they have posted and can create new incidents.
<p align="center">
   <img alt="be the hero instructions picture" src="https://res.cloudinary.com/mikemoura/image/upload/v1592081220/be-the-hero/instructions/be-the-hero_instructions_4_qwbzya.png"/>
</p>
To create a new incident, the Organization must fill in the incident form and click "Register".
<p align="center">
   <img alt="be the hero instructions picture" src="https://res.cloudinary.com/mikemoura/image/upload/v1592081220/be-the-hero/instructions/be-the-hero_instructions_5_okbjvl.png"/>
</p>
Users can access all of Organizations' incidents and contact information through their mobile application.
<p align="center">
   <img alt="be the hero instructions gif" src="https://res.cloudinary.com/mikemoura/image/upload/v1592082107/be-the-hero/mobile/be-the-hero_mobile_5mb_nrwpeb.gif"/>
</p>

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [Be The Hero](https://github.com/mikemorcerf/be-the-hero-app/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!

# :clap: Acknowledgment

Thanks to [Rocketseat](https://rocketseat.com.br/) for supporting the community and sharing amazing tech content.

# :closed_book: License

Released in 2020.
This project is under the MIT license.


Made with ♥ by [Michael de Morcerf e Moura](https://github.com/mikemorcerf) [:bowtie: Say hi!](https://www.linkedin.com/in/michaelmoura/)
