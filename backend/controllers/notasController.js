import notasModel from '../models/notasModel.js'

const getAll = (req, res) => {
    notasModel.getAll(res)
};

const getSpecific = (req, res) => {
    let nota_id = req.params.id
    notasModel.getSpecific(nota_id, res)
};

const createNota = (req, res) => {
    let nota = req.body

    if(!nota.title || !nota.description){
        return res.status(400).json({ok:false, error: "Titulo y descripcion son requeridos"})
    }

    notasModel.createNota(nota, res)
};

const updateNota = (req, res) => {
    let nota = req.params.id
    if(!nota){
        return res.status(400).json({ok:false, error: "ID es requerido"})
    }

    notasModel.updateNota(nota, res)
};

const deleteNota = (req, res) => {
    let nota = req.params.id
    if(!nota){
        return res.status(400).json({ok:false, error: "ID es requerido"})
    }
    notasModel.deleteNota(nota, res)
};

export default {
    getAll,
    getSpecific,
    createNota,
    updateNota,
    deleteNota
};
