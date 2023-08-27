// const express= require("express");  but now in nodejs Es6 latest Syntax so directly write as

import express from 'express';  // it is module import so insert in package.json "type":"module"
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';


const app=express();
app.use(cors());
app.use('/',router);
const PORT=8000;

DBconnection();

app.listen(PORT,()=>
    console.log(`server is running on PORT ${PORT}`));