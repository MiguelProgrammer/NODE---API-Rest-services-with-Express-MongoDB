import express from "express";
import AutorController from "../controller/autoresController.js"

const router = express.Router();

router
    .get("/autores", AutorController.getAutores)
    .post("/autores", AutorController.insertAutores)
    .put("/autores/:id", AutorController.updateAutores)
    .get("/autores/:id", AutorController.getAutorById)
    .delete("/autores/:id", AutorController.deletarAutor)

export default router;