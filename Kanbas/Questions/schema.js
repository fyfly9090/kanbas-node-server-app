import mongoose from "mongoose";
const questionSchema = new mongoose.Schema ({
  quiz: String,
  description: String,
  type:{type: String,
        enum:["MultipleChoices", "FillInBlanks", "TrueFalse"],
        default:"MultipleChoices"
   },
  points: {type:String, default:"0"},
  answers:[],

},

{collection:"questions"})
export default questionSchema;