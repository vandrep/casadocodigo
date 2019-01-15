class LivroDao {

    constructor(db) {
        this._db = db;
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
}

module.exports = LivroDao;