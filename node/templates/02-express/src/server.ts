import express from 'express';
import helmet from 'helmet';
import path from 'path';

const PORT = Number(process.env.PORT) || 3300;
const server = express()

server.use(helmet()) 
server.use(express.json()) 
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '../public'))) 

server.get('/ping', (req, res) => {
  res.json(`servidor rodando na porta ${PORT}`)
})




server.listen(PORT, ()=>{
  console.log(`servidor rodando na porta ${PORT}`);
})
