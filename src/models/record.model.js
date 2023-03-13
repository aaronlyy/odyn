import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    rid: Number,
    hostname: String,
    ipv4: String,
})

export default Record = new mongoose.Model('Record', recordSchema);