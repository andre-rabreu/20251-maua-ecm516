const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const baseUrl = 'host.docker.internal'
const barramento = '10000'

const baseLembretes = {}

// GET /lembretes () => {}
// localhost:4000/lembretes
app.get("/lembretes", (req, res) => {
  res.json(baseLembretes)
})

// POST /lembretes () => {}
// localhost:4000/lembretes
app.post("/lembretes", (req, res) => {
  const id = uuidv4()
  const { texto } = req.body
  const lembrete = { id, texto }
  baseLembretes[id] = lembrete

  axios.post(`http://${baseUrl}:${barramento}/eventos`, {
    tipo: 'LembreteCriado',
    dados: lembrete
  })
  .then((resAxios) => {
    console.log(resAxios.data)
  })
  .catch((e) => {
    console.log(e)
  })
  .finally(() =>{
    res.status(201).json(lembrete)
  })
})

// POST /eventos () => {}
app.post('/eventos', (req, res) => {
  console.log(req.body)
  res.end()
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})