import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Error: ", err);
        process.exit(1); 
    }
};

export default db;
