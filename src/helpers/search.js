
function buscarLivro({id, livros}){
    return livros.findIndex(livro => livro.id == id)
}


export {buscarLivro}