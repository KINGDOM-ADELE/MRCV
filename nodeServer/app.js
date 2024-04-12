//INPORT EXPRESS
const express = require('express')
const path = require('path')
const bodyParserx = require('body-parser')
let app = express()
app.use(express.json())

// for templating
const ejs = require('ejs');
app.set('view engine', 'ejs');

// To support cors and allow us send and recieve data through url we use cors
const cors = require('cors');
app.use(cors()) // allows cross origin scripting
app.use(bodyParserx.json()) 

// const courseRouter = require('./Routes/courseroutes')


const logger = function(req, res, next){
    next()
}

const requestedAt = function(req, res, next){
    req.requestedAt = new Date().toISOString()
    next()
}


app.use(express.static('./public'))// for web static files
// app.use(logger) //middleware
app.use(requestedAt) //middleware



app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from the "public" directory (React build files).
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) // lets us access static files in the upload folder


// Define a route to serve the "dist/index.html" file as the default route
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//   //DEFAULT ROUTE (for all other routes that are not matched)
//   app.all('*', (req, res, next) => {
//       const err = new CustomError(`Can't find ${req.originalUrl}`, 404)
//       next(err); // call the global error handling middleware
//   });

// app.use(globalErrorHandler) 

module.exports = app 