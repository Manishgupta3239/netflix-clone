import express from 'express'
import dotenv from 'dotenv'
import ConnectionDb from './connection/ConnectionDb.js';
import router from './routes/routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const app =express();

const PORT = process.env .port || 3000;
app.use(cors({
    origin: "https://netlix-clone-17d8d.web.app", // or your frontend URL
    credentials: true
  }));  
app.use(cookieParser());
app.use(express.json());
app.use('/netflix', router)


app.listen(PORT, async()=>{
    try{
        ConnectionDb();
        console.log(`Listening to Port ${PORT}`);
    }catch(error){
        console.log('Error in connecting to Server' , error.message);
    }
    
})

