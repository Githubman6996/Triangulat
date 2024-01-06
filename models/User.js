const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        type: String
    }, 
    password: {
        type: String
    },
    tokens: {
        type: Number
    },
    trians: {
        type: [{"trian":String,"quantity":Number}]
    },
    pfp: {
        type: String
    },
    lowercase: {
        type: String
    },
    banned: {
        type: Boolean
    },
    reason: {
        type: String
    },
    banby: {
        type: String
    },
    opened: {
        type: Number
    },
    role: {
        type: String
    },
    posts: {
        type: Number
    },
    totalposts: {
        type: Number
    },
    likes: {
        type: Number
    }
},{timestamps: true})

const User = mongoose.model('User',userSchema)
module.exports = User