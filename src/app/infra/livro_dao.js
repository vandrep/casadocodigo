class LivroDao {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');

                    return resolve(resultados);
                }
            )
        })
    }
    
    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get('SELECT * FROM livros where id = ?',
                [id],
                (err, row) => {
                    if(err){
                        console.log(err);                
                        return reject('Não foi possível buscar por ID');
                    }
                    return resolve(row);
                }
            );
        });
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
                `,[
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                err => {
                    if(err){
                        console.log(err);
                        return reject('Não foi possivel adicionar o livro!');
                    }
                    resolve();
                }
            )
        });
    }

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros
                SET titulo = ?, 
                    preco = ?, 
                    descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if(erro){
                    console.log(erro);
                    return reject("Não foi possível atualizar");
                }
                resolve();
            });
        });
    }

    remove(id){
        return new Promise((resolve, reject) => {
            this._db.run(`
                DELETE FROM livros
                WHERE id = ?
            `,
            [id],
            erro => {
                if (erro){
                    console.log(erro);
                    return reject("Não foi possível excluir")
                }
                resolve();
            })
        });
    }
}

module.exports = LivroDao;