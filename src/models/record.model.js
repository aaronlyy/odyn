import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    rid: {
        type: Number,
        required: true
    },
    hostname: {
        type: String,
        required: true
    },
    ipv4: {
        type: String,
        required: true
    },
})

export default mongoose.model('Record', recordSchema);