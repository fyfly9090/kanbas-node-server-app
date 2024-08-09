import * as dao from "./dao.js"; 

export default function QuizRoutes(app) {
    const findAllQuizzes = async (req, res) => {
        const { course } = req.query;
        if (course) {
            const quizzes = await dao.findQuizzesForCourse(course);
            res.json(quizzes);
            return;
        }
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
        return;
    }

    const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.qid);
    res.json(status);
   }

   const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
   }
   
   const updateQuiz = async (req, res) => {
    const quizId = req.params.qid;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
   }

   

    app.get("/api/courses/:cid/quizzes", findAllQuizzes);
    app.delete("/api/quizzes/:qid", deleteQuiz);
    app.put("/api/quizzes/:qid", updateQuiz);
    app.post("/api/courses/:cid/quizzes", createQuiz);


}