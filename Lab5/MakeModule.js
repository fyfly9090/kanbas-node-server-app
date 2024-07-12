const module = {
    id: 10, name: "Nodejs Introduction",
    description: "Fundamentals of nodejs",
    course: "CR101",
};

export default function MakeModule(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });

    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });
    
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
    
    
  };