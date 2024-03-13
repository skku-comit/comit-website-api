import mongoose, { Schema, models } from "mongoose";

const studySchema = new Schema({
    status: {
        type: String,
    },
    imageSrc: {
        type: String
        //required: true
    },
    title: {
        type: String
        //required: true
    },
    mentor: {
        type: String
        //required: true
    },
    day: {
        type: String
        //required: true
    },
    startTime: {
        type: String
        //required: true
    },
    endTime: {
        type: String
        //required: true
    },
    level: {
        type: String
        //required: true
    },
    stack: {
        type: Array<String>,
    },
    campus: {
        type: String
        //required: true
    },    
    description: {
        String,
    },
    createDate: {
        type: String,
        default: Date.now
    }
});

const Study = models.Study || mongoose.model("Study", studySchema);

export default Study;