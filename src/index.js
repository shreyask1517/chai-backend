// require('dotenv').config({path:'./.env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
   path: "./.env"
});

connectDB()
.then(() => {
   app.listen(process.env.PORT || 8000,()=>{ console.log(`Server is running at PORT:${process.env.PORT}`);
   })
})

.catch((error) => {
   console.error("Startup failed:", error);
   process.exit(1);
});





































/*import express from "express";
const app=express();

(async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
          console.log("ERROR",error);
          throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listing on port ${process.env.PORT}`);
        
       })
       
    } catch (error) {
     console.error("Error",error)
     throw error   
    }
})();
 */ //This is first approch to connect to database and start server but if it is not working so we will use another approach

 