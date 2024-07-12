import PathParameters from "./PathParameters.js"
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to lab5!!!")
      }
    );
    PathParameters(app);
    
}