import {model, Schema} from 'mongoose';

const questionSchema = new Schema({
    session: {
        type: Schema.Types.ObjectId,
        ref: "Session",
        required: true
    },
    question: {
        type: String,
        required: true
    },  
    answer: {
        type: String,
        required: true
     }

}, {timestamps: true});

const Question = model('Question', questionSchema);

export default Question;