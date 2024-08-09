import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY"],
      default: "STUDENT",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    quizzesTaken: [{quiz:{ref: "QuizModel",type:mongoose.Schema.Types.ObjectId},
      answers: [String],
      score: {type:Number, default:0},
      numberOfAttempts: {type: Number, default: 0}  
    }]
  },
  { collection: "users" }
);
export default userSchema;