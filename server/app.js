import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connection } from './db/connection.js';
import autenticacion from './routes/autenticacion.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
});

connection;

app.use("/elmostacho/api/v1", autenticacion);