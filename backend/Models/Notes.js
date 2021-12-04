const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("NotesModel", NotesSchema);