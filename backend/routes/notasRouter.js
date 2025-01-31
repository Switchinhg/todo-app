import express from 'express'
import notasController from '../controllers/notasController.js'
const notasRouter = express.Router();

notasRouter.get("/", notasController.getAll );
notasRouter.get("/:id", notasController.getSpecific );
notasRouter.post("/", notasController.createNota );
notasRouter.put("/:id", notasController.updateNota );
notasRouter.delete("/:id", notasController.deleteNota );

export default notasRouter