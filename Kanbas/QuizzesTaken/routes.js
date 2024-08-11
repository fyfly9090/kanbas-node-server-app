import * as dao from "./dao.js";

export default function QuizTakenRoutes(app) {
    const findOneQuizTaken = async ( req, res) => {
        const uid  = req.params.uid;
        const qid = req.params.qid;
        const quizTaken = await dao.findQuizByIds(uid, qid);
        res.json(quizTaken);
        return;
    }

    const findAllQuizzesTaken = async (req, res) => {
        const quizzesTaken = await dao.findAllQuizzesTaken();
        res.json(quizzesTaken);
        return;
    }

    const createQuizTaken = async (req, res) => {
        const quizTaken = await dao.createQuizTaken(req.body);
        res.json(quizTaken);
    }

    const updateQuizTaken = async (req, res) => {
        const qtId = req.params.qtId;
        const status = await dao.updateQuizTaken(qtId, req.body);
        res.json(status);
    }



    app.get("/api/quizzesTaken/:uid/:qid", findOneQuizTaken);
    app.get("/api/quizzesTaken", findAllQuizzesTaken);
    app.post("/api/quizzesTaken", createQuizTaken);
    app.put("/api/quizzesTaken/:qtId", updateQuizTaken);
}