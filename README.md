# Sample React Application with a Login and Dashboard (MERN Stack)

This project was bootstrapped with [Create React App and express framework].

## Demo

Demo in Google Cloud (Firebase) https://lijo-todo.web.app

## Sample Login

demo/demo

## Available Scripts

This project is developed in 2 stacks , one with MERN Stack and another one with react , express, node and JSON database. So if you want to run it in MERN you can deploy the application using docker. Also the sample code will support for stand alone deployment , if you wan to avoid the mongo DB. in that case we run it as 2 seperate micro service. The database adapters already developed in such a way:

Docker way - from the document root folder run the following command, Once the docker is up front end will be in http://localhost:3000 and back end will be in http://localhost:5000

### `docker-compose up --build`

Or Option 2

Alternative way - move to api folder and run the following command to make the api up, api will be avilable in http://localhost:5000

### `yarn install`

### `yarn dev`

Alternative way - move to client folder and run the following command to make the api up, api will be avilable in http://localhost:3000

### `yarn install`

### `yarn start`

Code linting will be avilable in both api and client

### `yarn lint`

Back end API documentation

### http://localhost:5000/docs

### `Functionalities`

    Login
    Dashboard
    Add new task
    Remove Task
    Search Task
    Logout

### `Data Storage`

    mongo DB/ JSON DB

### `External libraries used`

    React-bootstrap (Styling)
    Redux (State management)
    Redux Form (Form management)
    Lodash (Array manipulation)
    Node-sass (scss compiler)
    eslint/prettier (Code formatting)
    react-google-charts
    jsonwebtoken
    lowdb
    mongoose
    morgan
    swagger-jsdoc
