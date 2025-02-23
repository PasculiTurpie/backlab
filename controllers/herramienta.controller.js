const Tools = require('../models/herramientas.model')


module.exports.getTools = async (req, res) => {
    await Tools.find().populate('objetivo')
        .then((tools) => res.json({ tools }))
        .catch((err) => res.status(404).json("Error: ", err));
};

module.exports.createTool = async (req, res) => {
    Tools.create(req.body)
    .then((tools) => res.json({ tools }))
    .catch((err) => res.status(404).json("Error: ", err));    
}

module.exports.updateTool = async (req, res) => {
    try {
        const tools = await Tools.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({ tools });
    } catch (error) {
        res.status(404).json({ error: error })
    }
};

module.exports.deleteTool = async (req, res) => {
    try {
        const tools = await Tools.findByIdAndDelete(req.params.id);
        if(!tools) return res.status(404).json({message: "Herramienta no encontrada"});
        res.json({ message: "Herramienta eliminada" });
    } catch (error) {
      res.status(404).json({ error: error });
    }
}

module.exports.getToolById = async (req, res) => {
    try {
        const tools = await Tools.findById(req.params.id).populate("objetivo");
        if(!tools) return res.status(404).json({message: "Herramienta no encontrada"});
        res.json(tools);
    } catch (error) {
       res.status(404).json({ error: error });
    }
}