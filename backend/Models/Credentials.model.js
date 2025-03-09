import mongoose from "mongoose";
import { Schema } from "mongoose";
const CredentialSchema = new Schema({
    college: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    training: {
        type: [String],
        required: true
    },
    organisation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required : true
    },
    rating: {
        type: Number,
        required: true
    },
    hiringreason: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
});

const CredentialModel = mongoose.model('credentials', CredentialSchema);
export default CredentialModel;