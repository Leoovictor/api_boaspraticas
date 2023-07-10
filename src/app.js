import express from "express" //libs externas sempre em primeiro lugar

import {buscarLivro} from "./helpers/search.js"//libs proprias sempre em segundo plano

const app = express() //intanciando express
app.use(express.json()) //intaciando o json

const livros = [
    {id:1, "titulo":"Senhor"},
    {id:2, "titulo":"Hobbit"},
    {id:3, "titulo":"SANDMAN"},
    {id:4, "titulo":"BELLWOF"}
]

                
app.get('/', (req,res) => {
    return res.status(200).send('Curso')
})

app.get('/livros', (req, res) =>{
    return res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id)// puxando o dado da line
    return res.json(livros[index])
})

app.post('/livros', (req,res) => {
    livros.push(req.body)
    return res.status(201).send('Livro criado')
})

app.put('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id)// puxando o dado da line
    livros[index].titulo = req.body.titulo
    return res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let { nome, idade } = req.body
    // let index = buscarLivro(req.params.id)// puxando o dado da line
    livros[index].titulo = req.body.titulo
    return res.json(livros)
})

export default app