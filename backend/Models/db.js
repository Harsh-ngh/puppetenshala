
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_CONN;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })
