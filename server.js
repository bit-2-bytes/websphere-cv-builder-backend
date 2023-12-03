const express = require('express');
const connectDb = require('./config/connectDb');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/api/cv-details/', require('./Router/cv-router'));



app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})