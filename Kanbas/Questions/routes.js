import db from "../Database/index.js";

export default function QuestionRoutes(app) {
    app.get("/api/quizzes/:qid/questions", (req, res) => {
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
    })
}