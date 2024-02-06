import livros from "../model/Livro.js";

class LivroController {

    static getLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        }); 
    }

    static getLivroById = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livros) => {
            if(!err){
                res.status(200).send(livros);
            } else {
                res.status(400).send({message: `${err.message} - Falha ao localizar`});
            }
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
    
    static updateLivros = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send("Atualizado com sucesso")
            } else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar`});
            }
        });
    }
    
    static deletarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send("Removido com sucesso")
            } else {
                res.status(500).send({message: `${err.message} - Falha ao remover`});
            }
        });
    }
}

export default LivroController