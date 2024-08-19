import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import apiRoutes from './routes/api';
import path from 'path';

dotenv.config();

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', apiRoutes);

// Tratamento de erro global
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;