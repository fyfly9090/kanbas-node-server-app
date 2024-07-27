import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: String,
    lessons: [{id: String,
               name: String,
               desctiption: String,
               module: String
    }]
    
  },
  { collection: "modules" }
);
export default moduleSchema;