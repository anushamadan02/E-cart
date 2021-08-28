const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const postRoutes = require('./routes/posts');
const dataRoutes = require("./routes/dataconsumption")
const planRoutes =require('./routes/plans');
const broadbandRoutes =require('./routes/broadband');
const app = express();

mongoose.connect('mongodb://localhost:27017/csDB', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("DATABASE CONNECTED"));


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",orderRoutes)
app.use('/api', postRoutes);
app.use('/api', dataRoutes);
app.use('/api', planRoutes);
app.use('/api', broadbandRoutes);
app.listen(5000,()=>{
    console.log("Server started")
})

const API = 'http:localhost:3000/api/'
