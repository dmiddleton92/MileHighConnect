// import necessary modules from mongoose
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

//create a schema for the user model

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
});


