import mongoose, { Schema, models } from "mongoose";

const CoMitUserSchema = new Schema({
    id:
    {
        type: Number,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    name:
    {
        type: String,
        required: true,
    },
    studentID:
    {
        type: Number,
        required: true,
    },
    isAdmin:
    {
        type: Boolean,
        required: true,
    }
});


const CoMitUser = models.CoMitUser || mongoose.model("CoMitUser", CoMitUserSchema);

export default CoMitUser;