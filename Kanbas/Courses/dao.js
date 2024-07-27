import model from "./model.js";


export const createCourse = (course) => {
    delete course._id
    return model.create(course);
} 

export const findAllCourses = () => 
    model.find();

export const findCourseByName = (name) =>  
    model.findOne({ name: name });

export const findCourseByNumber = (number) =>  
    model.findOne({ number: number });

export const deleteCourse = (courseId) => 
    model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, course) =>  
    model.updateOne({ _id: courseId }, { $set: course });

