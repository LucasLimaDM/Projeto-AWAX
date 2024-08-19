import express from 'express';
import { generateResponse } from '../config/ai';

const router = express.Router();

router.get('/ai/:prompt', async (req, res) => {
  try {
    const prompt = req.params.prompt;
    
    if (!prompt) {
      return res.status(400).json({ error: 'O prompt é obrigatório' });
    }

    const aiResponse = await generateResponse(prompt);
    res.json({ aiResponse });
  } catch (error) {
    console.error('Erro na rota de AI:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API está funcionando corretamente' });
});

export default router;