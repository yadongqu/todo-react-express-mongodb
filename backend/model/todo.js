var dbURL = require("../configure/database").local;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    title: String,
    content: String,
    updated_at: Date
})

mongoose.model('Todo', Todo);
mongoose.connect(dbURL);