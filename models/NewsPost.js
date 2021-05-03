const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NewsPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = NewsPost = mongoose.model('newsPost', NewsPostSchema);