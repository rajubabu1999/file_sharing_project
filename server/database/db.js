
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const DBconnection = async () =>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const MONGODB_URL=`mongodb+srv://fileshare:file123@cluster0.wjnqekz.mongodb.net/`;
  
    try{
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default DBconnection;