import mongoose from 'mongoose';
import { Schema } from "mongoose";

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    }
});
const messageModel = mongoose.model('messages', messageSchema);
export default messageModel;