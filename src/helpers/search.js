
function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id)
}


export {buscarLivro}