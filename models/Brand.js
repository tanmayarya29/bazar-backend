const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String
    }
});

module.exports = mongoose.model("Brand", brandSchema);
