import app from './src/app.js'

const port = process.env.PORT || 3000 //setando a porta que está especificada dentro do .env ou roda na 3000

app.listen(port, () => console.log(`Rodando http://localhost:${port}`))


// acrecido o  "type":"module", no package para entender modularização