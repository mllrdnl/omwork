const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    childname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    parentonefirst: {
        type: String,
        required: true,
    },
    parentonelast: {
        type: String,
        requried: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    assignments: {
        type: Object,
        required: false,
    }
});


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;