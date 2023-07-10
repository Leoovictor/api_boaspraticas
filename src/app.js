import express from "express";

const app = express()

const livros = [
    {id:1, "titulo":"Senhor"},
    {id:2, "titulo":"Hobbit"}
]

app.get('/', (req,res) => {
    res.status(200).send('Curso')
})

app.get('/livros', (req, res) =>{
    res.status(200).json(livros)
})

export default app