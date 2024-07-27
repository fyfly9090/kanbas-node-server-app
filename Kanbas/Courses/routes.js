/* import Database from "../Database/index.js"; */
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
   const findAllCourses = async (req, res) => {
      const {number, name} = req.query;

      if(number) {
        const courses = await dao.findCourseByNumber(number);
        res.json(courses);
        return;
      }

      if(name) {
        const courses = await dao.findCourseByName(name);
        res.json(courses);
        return;
      }
      
      const courses = await dao.findAllCourses();
      res.json(courses)
      

   };
   
   const deleteCourse = async (req, res) => {
     const status = await dao.deleteCourse(req.params.id);
     res.json(status);
   };

   const createCourse = async (req, res) => {
    const course = await dao.findCourseByNumber(req.body.number);

    if (course) {
        res.status(400).json(
            { message: "Course number already taken" });
        return;
    }
     const newCourse = await dao.createCourse(req.body);
     res.json(newCourse)
   };

   const updateCourse = async (req, res) => {
     const { courseId } = req.params;
     const status = await dao.updateCourse(courseId, req.body);
     res.json(status); 
   };


    app.put("/api/courses/:id", updateCourse);

    app.delete("/api/courses/:id", deleteCourse);

    app.post("/api/courses", createCourse);

    app.get("/api/courses",findAllCourses);
  
}