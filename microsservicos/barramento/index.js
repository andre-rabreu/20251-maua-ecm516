const axios = require('axios')
const express = require ('express')
const app = express()
app.use(express.json())

const eventos = []
const hostname = 'host.docker.internal'

// Definir um endpoint que viabilize a obtenção da coleção de eventos
app.post("/eventos", async (req, res) => {
    const evento = req.body
    console.log(evento)
    eventos.push(evento)

    try{
        await axios.post(`http://${hostname}:4000/eventos`, evento)
    }
    catch(e){
        console.log(e)
    }

    try {
        await axios.post(`http://${hostname}:5001/eventos`, evento)
    }
    catch (e) {
        console.log(e)
    }

    try{
        await axios.post(`http://${hostname}:6000/eventos`, evento)
    }
    catch(e){
        console.log(e)
    }

    try {
        await axios.post(`http://${hostname}:7001/eventos`, evento)
    }
    catch(e) {
        console.log(e)
    }

    res.end()
})

// Definir um endpoint que viabilize a obtenção da coleção de eventos
app.get('/eventos', (req, res) => {
  res.json(eventos)
})

const port = 10000
app.listen(port, () => {
  console.log(`Barramento de eventos. Porta ${port}.`)
})