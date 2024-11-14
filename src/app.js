import express from 'express';
import cors from 'cors';
import calculatorRoutes from './routes/calculatorRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());


// Here I configure the routes that will exist
app.use('/api', calculatorRoutes);

export default app;
