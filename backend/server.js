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
    origin:[ "http://localhost:5173/" , "https://netlix-clone-17d8d.web.app"],  // Use the specific frontend URL
    credentials: true,  // Allow credentials like cookies or authorization headers
  }));
  
  // Handle preflight requests (OPTIONS)
  app.options('*', cors());  // Allow preflight requests
  
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

