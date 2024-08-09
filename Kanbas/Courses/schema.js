import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: { type: String, unique: true },
    name:  {type: String, required: true, default: "New Course"},
    startDate: String,
    endDate: String,
    department: String,
    credit: Number,
    description: {type: String, required: true, default: "New Description"},
  },
  { collection: "courses" }
);
export default courseSchema;