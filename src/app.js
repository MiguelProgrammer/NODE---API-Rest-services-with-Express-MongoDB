import express from "express";
 
const app = express();
app.use(express.json());

const mensagem = "Curso de Node";
const smsPost = "Inserido com Sucesso.";

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

app.post("/livros", (req, res) => { 
    livros.push(req.body);
    res.status(201).send(smsPost);
});

export default app;

