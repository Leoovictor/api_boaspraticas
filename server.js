const http = require("http")
const port = 3000


const rotas ={
    '/':'Curso Node',
    '/livros':'livro',
    '/autores':'Listagem de autores',
    '/sobre':'asdasdasd'
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})


server.listen(port, () => console.log(`Rodando http://localhost:${port}`))