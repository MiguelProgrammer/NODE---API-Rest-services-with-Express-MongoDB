import express from "express";
import db from "./config/dbConnect.js";
 
db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
    console.log("Conexão realizada!");
})

const app = express();
app.use(express.json());

const mensagem = "Curso de Node";
const smsPost = "Inserido com Sucesso.";
const smsDelete = "Removido com Sucesso.";

const livros = [
    {id:1, "titulo": "The Flash"},
    {id:2, "titulo": "Clean Code"}
]

app.get("/livros/:id", (req, res) => { 
    res.json(livros[buscaLivro(req.params.id)]);
});

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

app.put("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.patch("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});


app.delete("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id);
    livros.splice(index,1); 
    res.send(smsDelete);
});


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;

