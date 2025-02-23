const Curso = require('../models/cursos.model');


module.exports.getCurso =  (req, res) => {
  Curso.find()
    .then((curso) => {
      if (!curso) return res.status(404).json({ message: "Curso no encontrado" });
      res.json(curso);
    })
    .catch((err) => res.status(404).json("Error: ", err));
};



module.exports.getIdCurso = async(req, res, next) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if(!curso) return res.status(404).json({message: "Curso no encontrado"});
    res.json(curso);
  } catch (error) {
    next(error);
  }
};

module.exports.createCurso =  async (req, res) => {
  const curso = new Curso(req.body);
  try {
    await curso.save();
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json(error);  
  }
};

module.exports.updateCurso = async(req, res, next) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!curso) return res.status(404).json({message: "Curso no encontrado"});
    res.json(curso);
  } catch (error) {
    next(error);
  }
};
