import mongoose from "mongoose";
const quizSchema = new mongoose.Schema ({
   title: {type:String, required: true, default: "Unnamed Quiz"},
   type: {type: String,
          enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
          default: "Graded Quiz"
   }, 
   course: String,
   instruction: String,
   group:{type: String,
    enum: ["Quizzes", "Exams", "Assignments", "Project"],
    default: "Quizzes"
   },
   shuffle: {type: Boolean, default: true},
   multiple: {type: Boolean, default: false},
   mul_times: {type:Number, default: 1 },
   code: String,
   oneQuestion: {type:Boolean, default: true},
   webcam: {type:Boolean, default:false},
   lockQuestion: {type:Boolean, default:false},
   time: {type:Number, default:20},
   timeLimit: {type:Boolean, default:true},
   points: {type: Number, default: 0},
   due: String,
   available: String,
   publish: {type:Boolean, default: false}
},
  {collection: "quizzes"}
);
export default quizSchema;