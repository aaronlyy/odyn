import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
})

export default mongoose.model('User', userSchema);