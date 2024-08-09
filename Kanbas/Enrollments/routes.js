
import * as dao from "./dao.js"; 

export default function EnrollmentRoutes(app) {
    const findAllEnrollments = async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.json(enrollments);
        return; 
    }

    const createEnrollment = async (req, res) => {
        const status = await dao.createEnrollment(req.body);
        res.json(status);
    }

    const deleteEnrollment = async (req, res) => {
        const { user } = req.params.uid;
        const { course } = req.params.cid;
        const status = await dao.deleteEnrollment(user, course);
        res.json(status);
    }

    app.get("/api/enrollments", findAllEnrollments);
    app.post("/api/enrollments", createEnrollment);
    app.delete("/api/enrollments/:cid/:uid", deleteEnrollment);


}