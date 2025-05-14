import express from 'express';
import keysRouter from './routes/keys.js';
import actorsRouter from './routes/actors.js';

// Config
const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/keys', keysRouter);
app.use('/api/actors', actorsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});