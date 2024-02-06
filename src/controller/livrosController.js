import livros from "../model/Livro.js";

class LivroController {

    static getLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        }); 
    }
    
    static insertLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){        
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`});
            }
                res.status(201).json(livro.toJSON());
        }); 
    }
}

export default LivroController