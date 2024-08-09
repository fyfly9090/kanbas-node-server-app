import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz.id;
    return model.create(quiz);
}

export const findAllQuizzes = () => 
   model.find()

export const findQuizzesForCourse = (course) => 
    model.findOne({course: course});

export const findQuizByQuizId = (quizId) =>
    model.findById({quizId})

export const deleteQuiz = (quizId) =>
    model.deleteOne({_id: quizId})

export const updateQuiz = (quizId, quiz) => 
    model.updateOne({_id: quizId}, {$set: quiz})
