const axios = require("axios")
const express = require('express')
const app = express()
app.use(express.json())

const barramento = '10000'
const baseUrl = 'host.docker.internal'

const baseConsolidada = {}

const funcoes = {
  LembreteCriado: async (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: async (observacao) => {
    const observacoes = 
      baseConsolidada[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes
  },
  ObservacaoAtualizada: async (observacao) => {
    const observacoes = baseConsolidada(observacao.idLembrete)["observacoes"]
    const index = observacoes.findIndex(o => o.id === observacao.id)
    observacoes[index] = observacao
  }
}

app.get('/lembretes', (req, res) => {
  res.json(baseConsolidada)
})

app.post('/eventos', async (req, res) => {
  try {
    const evento = req.body
    console.log(evento)
    await funcoes[evento.tipo](evento.dados)
  } 
  catch(e) {
    console.log(e)
  }
  finally {
    res.end()
  }
})

const port = 6000
app.listen(port, async () => {
  console.log(`Consulta. Porta ${port}.`)
  const { data } = await axios.get(`http://${baseUrl}:${barramento}/eventos`)
  data.forEach(async (evento) => {
    try {
      await funcoes[evento.tipo](evento.dados)
    }
    catch(e) {
      console.log(e)
    }
  })
})