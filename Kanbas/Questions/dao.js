import model from "./model.js";

export const createQuestion = (question)=> {
    delete question._id
    return model.create(question)
}

export const findAllQuestions = () => 
    model.find()

export const findQuestionsByQuiz = (quiz) =>
    model.findOne({quiz:quiz})

export const updateQuestion = (questionId, question) => 
    model.updateOne({_id:questionId}, {$set: question})

export const deleteQuestion = (questionId) =>
    model.deleteOne({_id:questionId})
