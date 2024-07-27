import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: { type: String, unique: true },
    name: String,
    startDate: String,
    endDate: String,
    department: String,
    credit: Number,
    description: String
  },
  { collection: "courses" }
);
export default courseSchema;