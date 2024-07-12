import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import MakeModule from "./Lab5/MakeModule.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";


const app =express();
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

Hello(app);
Lab5(app);
QueryParameters(app);
WorkingWithObjects(app);
MakeModule(app);
WorkingWithArrays(app);

app.listen( process.env.PORT || 4000)