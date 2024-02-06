import express from "express";
import LivroController from "../controller/livrosController.js"

const router = express.Router();

router
    .get("/livros", LivroController.getLivros)
    .post("/livros", LivroController.insertLivros)
    .put("/livros/:id", LivroController.updateLivros)
    .get("/livros/:id", LivroController.getLivroById)
    .delete("/livros/:id", LivroController.deletarLivro)

export default router;