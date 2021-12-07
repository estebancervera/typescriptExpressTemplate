import express from 'express';
export const app = express();

// Setup Cors
import cors from 'cors';
app.use(cors({ origin: true }));

app.use(express.json());
