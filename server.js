
import app from "./src/app.js";

const port = process.env.PORT || 3000;
const mensagemServidor = `Servidor escutando em http://localhost:${port}`;

app.listen(port, () => {
    console.log(mensagemServidor)
});