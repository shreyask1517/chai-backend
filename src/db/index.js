import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URL;

        if (!mongoUrl) {
            throw new Error("Missing MONGODB_URL (or MONGO_URL) in .env");
        }

        const connectionInstance = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
        console.log(`\nMongoDB connected! DB Host: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
        
    }
}

export default connectDB;