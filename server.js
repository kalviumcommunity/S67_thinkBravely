const express = require('express');
const app = express();
const connectDB = require('./db');
const Port = 9090;
require('dotenv').config();
const url=process.env.mongo;


    app.listen(Port,async()=>{

        try {
            await connectDB(url);
            console.log(`Server is running on port ${Port}`);
        }
        catch(err){
            console.log(err);
        }
    });