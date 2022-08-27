import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './database';
import './database/seeders';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

export default app;