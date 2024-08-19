import express from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express()

server.use(helmet()) 
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '../public')))

server.get('/', (req, res) => {
  res.json({"message": "olá mundo express"})
})

server.get('/ping', (req,res)=>{
  res.json({"pong": true})
})

server.listen(3000, ()=>{
  console.log('servidor rodando na porta 3000')
})

console.log(`olá ${process.env.NAME}`)