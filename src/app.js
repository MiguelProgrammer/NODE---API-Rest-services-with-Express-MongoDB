import express from "express";
 
const app = express();
const mensagem = "Curso de Node";

const livros = [
    {id:1, "titulo": "The Flash"},
    {id:2, "titulo": "Clean Code"}
]

app.get("/", (req, res) => {
    res.status(200).send(mensagem);
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;

