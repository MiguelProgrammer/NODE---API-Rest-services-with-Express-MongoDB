import express from "express";
import LivroController from "../controller/livrosController.js"

const router = express.Router();

router
    .get("/livros", LivroController.getLivros)
    .post("/livros", LivroController.insertLivros)

export default router;