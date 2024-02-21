import dotenv from 'dotenv';
import express from 'express';
import examRoutes from './routes/exams';
import mongoose from 'mongoose';


require('dotenv').config()
dotenv.config();

const app = express();
const examRoutes = require('./routes/exams');

// listening for request -- testing 
app.listen(3000, () => {
    console.log('listening on port 3000')
})

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/server/exams', examRoutes)

// connect to database
mongoose.connect(process.env.DB_STRING)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })

process.env