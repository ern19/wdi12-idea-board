const mongoose = require("mongoose");

const Schema = mongoose.Schema

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: "New Idea Title",
        required: true
    },
    description: {
        type: String,
        default: "New Idea Description",
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
        
    }
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ideas: [IdeaSchema]
})

const IdeaModel = mongoose.model("Idea", IdeaSchema)
const UserModel = mongoose.model("User", UserSchema)

module.exports = {
    IdeaModel: IdeaModel,
    UserModel: UserModel
}