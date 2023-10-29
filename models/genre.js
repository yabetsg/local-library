const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const GenreScheme = new Schema({
    name:{type:String, require:true, maxLength:100, minLength:3},
});

GenreScheme.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre",GenreScheme);