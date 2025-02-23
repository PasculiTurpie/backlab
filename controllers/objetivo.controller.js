const Objetivo = require('../models/objetivos.model');

module.exports.getObjetivos = async (req, res) => {
    await Objetivo.find()
        .then((objetivos) => res.json({ objetivos }))
        .catch((err) => res.status(404).json("Error: ", err));
};

module.exports.createObjetivo = (req, res) => {
    Objetivo.create(req.body)
        .then((objetivo) => res.json(objetivo))
        .catch((err) =>
            res.status(400).json({ message: "Algo ocurrio!!", error: err })
        );
};

module.exports.updateObjetivo = async (req, res) => {
    await Objetivo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((objetivo) => res.json(objetivo))
        .catch((err) =>
            res.status(400).json({ message: "Algo ocurrio!!", error: err })
        );
};

module.exports.deleteObjetivo = async (req, res) => {
    await Objetivo.deleteOne(req.params._id)
        .then(() => res.json({ message: "Objetivo eliminado" }))
        .catch((err) =>
            res.status(404).json({ message: "Objetivo no encontrado", error: err })
        );
};

module.exports.getIdObjetivo = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await Objetivo.findById(id)
        .then((objetivo) => {
            if (!objetivo) return res.status(404).json({ message: "Objetivo no encontrado" });
            res.json(objetivo);
        })
       .catch((err) => res.status(404).json("Error: ", err));
};
