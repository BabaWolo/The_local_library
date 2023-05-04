const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, minLength: 3, maxLength: 100, required: true},
});

GenreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`;
});

const GenreModel = mongoose.model("Genre", GenreSchema);

module.exports = GenreModel;