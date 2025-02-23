const Docente = require('../models/docente.model');

module.exports.getDocente = async (req, res, next) => {
  try {
    const docente = await Docente.findById(req.params.id).populate('curso')
    if (!docente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }
    res.json(docente);
    } catch (error) {
      next(error);
    }
}

module.exports.getDocentes = async (req, res) => {
  await Docente.find()
    .populate("curso")
    .then((allDocente) => res.json({ allDocente }))
    .catch((err) =>
      res.status(404).json({ message: "Error busqueda docente", err })
    );
};

module.exports.createDocente = (req, res) => {
  console.log(req.body)
  Docente.create(req.body)
    .then((newDocente) =>{
      res.status(201).json({
        message: "Docente creado con exitos",
        newDocente,
      })
    })
    .catch((error) => {
      res
        .status(400)
        .json({error })
    });
};

module.exports.updateDocente = async (req, res) => {
  try {
    const { id } = req.params;
    const { curso } = req.body;

    const updatedDocente = await Docente.findByIdAndUpdate(
      id,
      { $push: { curso: curso } },
      { new: true }
    ).populate("curso");

    if (!updatedDocente) {
      return res.status(404).json({ message: "Docente no encontrado" });
    }

    res.json({ updatedDocente });
  } catch (err) {
    res.status(400).json({ message: "Error al actualizar docente", err });
  }
};
