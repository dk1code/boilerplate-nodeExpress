const express = require("express")
const app = express()
// const morgan = require('morgan')


const cookieParser = require('cookie-parser')
require('./config/load')

// ##### routes #####



// ##### database #####

// const mongoose = require('mongoose')

// ##### default middleware #####

app.use( express.json() ) // JSON body parser middleware
app.use( morgan('dev') ) // setup morgan request logger middleware

// to log the call events
app.use( (req, res, next) => {
  console.log(`We called a route ${req.url} `)
  next()
})

// handling CORS-errors
app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*')
     res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorisation'
     )
     if (req.method === 'OPTIONS') {
          res.header(
               'Access-Control-Allow-Methods',
               'GET, POST, PATCH, DELETE, PUT'
          )
          return res.status(200).json({})
     }
     next()
})

//middleware to route the requests to different modules

// ## app.use('/products', productRoutes)
// ## app.use('/orders', ordersRoutes)
// ## app.use('/user', userRoutes)

// ##### Error Handling #####

module.exports = app