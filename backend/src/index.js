const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const {setupWebsocket} = require('./websocket')

mongoose.connect('mongodb+srv://omnistack:astronomia2006@cluster0-txh3a.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
const server = http.Server(app)

setupWebsocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)
//Metodos Http: get, post, put, delete
//Tipos de parametros

//Query Params: req-query
//Route params: req.params
//Body:req.body

//mongoDB (não relacional)
server.listen(3333)