import mongoose from "mongoose";
const quizzesTakenSchema = new mongoose.Schema({
    quiz: String,
    user: String,
    attempts: Number,
    score: Number,
    answers:[],
}, 
 {collection: "quizzesTaken" }
);
export default quizzesTakenSchema;