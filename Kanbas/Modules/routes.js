
import * as dao from "./dao.js"; 

export default function ModuleRoutes(app) {
    const findAllCourses = async (req, res) => {
        const { course } = req.query;
        if (course) {
            const modules = await dao.findModulesByCourse(course);
            res.json(modules);
            return;
        }
        const modules = await dao.findAllModules();
        res.json(modules);
        return;
    }

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    }

    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    }

    const updateModule = async (req, res) => {
        const {moduleId} = req.params.mid;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    }
   
    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);    
    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findAllCourses);

}