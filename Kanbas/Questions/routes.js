
import * as dao from "./dao.js"; 

export default function QuestionRoutes(app) {
    /* app.get("/api/quizzes/:qid/questions", (req, res) => {
        const { qid } = req.params;
        const questions = db.questions.filter((qt)=>qt.quiz===qid);
        res.json(questions);
    })

    app.delete("/api/questions/:qtid", (req, res) => {
        const {qtid} = req.params;
        db.questions = db.questions.filter((qt)=>qt._id !== qtid);
        res.sendStatus(200);
    })

    app.post("/api/quizzes/:qid/questions", (req, res)=>{
        const { qid } = req.params;
        const newQuestion = {
            ...req.body,
            quiz: qid,
            _id: new Date().getTime().toString()
        };
        db.questions.push(newQuestion);
        res.send(newQuestion);
    })

    app.put("/api/questions/:qtid", (req, res) => {
        const { qtid } = req.params;
        const questionIndex = db.questions.findIndex((qt) => qt._id === qtid);
        db.questions[questionIndex] = {
            ...db.questions[questionIndex],
            ...req.body
        };
        res.sendStatus(204);
    }) */
    const findAllQuestions = async (req, res) => {
        const { quiz } = req.query;
        if (quiz) {
            const questions = await dao.findQuestionsByQuiz(quiz);
            res.json(questions);
            return;
        }
        const questions = await dao.findAllQuestions();
        res.json(questions);
        return;
    }   

    const deleteQuestion = async (req, res) => {
        const status = await dao.deleteQuestion(req.params.qtid);
        res.json(status);
    }

    const updateQuestion = async (req, res) => {
        const questionId = req.params.qtid;
        const status = await dao.updateQuestion(questionId, req.body);
        res.json(status); 
    }

    const createQuestion = async (req, res) => {
        const question = await dao.createQuestion(req.body);
        res.json(question);
    }

    app.get("/api/quizzes/:qid/questions", findAllQuestions);
    app.delete("/api/questions/:qtid", deleteQuestion);
    app.put("/api/questions/:qtid", updateQuestion);
    app.post("/api/quizzes/:qid/questions", createQuestion);


    
}