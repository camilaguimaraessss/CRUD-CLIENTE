const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { adicionarCliente, listarClientes } = require('./models/clienteModel')

const app = express()
app.use(bodyParser.json())

// Rota para página (VIEW)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'clientes.html'))
})

// POST – adicionar novo cliente
app.post('/clientes', (req, res) => {
  const { nome, idade, cpf } = req.body
  const novoCliente = adicionarCliente(nome, idade, cpf)
  res.status(201).json(novoCliente)
})

// GET – listar todos os clientes
app.get('/clientes', (req, res) => {
  res.json(listarClientes())
})

// Servidor
app.listen(3007, () => console.log('Servidor rodando em http://localhost:3007'))
