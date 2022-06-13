const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    }
})


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
    parentoneemail: {
        type: String,
        required: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
    },
    // password: {
    //     type: String,
    //     required: false,
    // },
    // assignments: AssignmentSchema,
});


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;