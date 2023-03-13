import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    role: String,
    hash: String
})

export default User = mongoose.Model('User', userSchema);