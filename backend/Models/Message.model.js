import mongoose from 'mongoose';
import { Schema } from "mongoose";

const messageSchema = new Schema({
    prompt: {
        type: String,
        required: true
    }
});
const messageModel = mongoose.model('message', messageSchema);
export default messageModel;