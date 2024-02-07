import autores from "../model/Autor.js";

class AutorController {

    static getAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        }); 
    }

    static getAutorById = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(!err){
                res.status(200).send(autores);
            } else {
                res.status(400).send({message: `${err.message} - Falha ao localizar`});
            }
        });
    }
    
    static insertAutores = (req, res) => {
        let livro = new autores(req.body);
        livro.save((err) => {
            if(err){        
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`});
            }
                res.status(201).json(livro.toJSON());
        }); 
    }
    
    static updateAutores = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send("Atualizado com sucesso")
            } else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar`});
            }
        });
    }
    
    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send("Removido com sucesso")
            } else {
                res.status(500).send({message: `${err.message} - Falha ao remover`});
            }
        });
    }
}

export default AutorController