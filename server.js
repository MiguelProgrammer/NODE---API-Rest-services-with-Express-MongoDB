
const http = require("http");
const port = 3000;
const mensagem = "Curso de Node";
const mensagemServidor = `Servidor escutando em http://localhost:${port}`;

const rotas = {
    "/": mensagem,
    "/livros": "Curso de Java",
    "/autores": "James Gosling",
    "/editora": "Sun",
    "/versao": "1.0"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(mensagemServidor)
});