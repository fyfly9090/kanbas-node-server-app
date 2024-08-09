import model from "./model.js";

export const createEnrollment = (enrollment) => {
    delete enrollment._id;
    return model.create(enrollment);
}

export const findAllEnrollments = () => 
    model.find()

export const deleteEnrollment = (user, course) => 
    model.deleteOne({user:user}, {course:course})
