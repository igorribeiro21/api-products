import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './database';
import './database/seeders';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    return res.status(200).json({
        date: new Date(),
        env: 'Development'
    });
});

export default app;