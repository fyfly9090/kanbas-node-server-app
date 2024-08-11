import model from "./model.js";

export const findAllQuizzesTaken = () => 
    model.find();

export const createQuizTaken = (quizTaken) => {
    delete quizTaken._id;
    return model.create(quizTaken);
}

export const findQuizByIds = (userId, quizId) => 
    model.findOne({user:userId}, {quiz:quizId})


export const updateQuizTaken = (quizTakenId, quizTaken) => 
    model.updateOne({_id:quizTakenId}, {$set: quizTaken})

