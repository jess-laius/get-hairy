const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    date: Date,
    location: String,
    sponsor: String

})

module.exports = mongoose.model('data', dataSchema);