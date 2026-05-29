import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

import authRouter from './routes/authRouter.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

app.use('/auth', authRouter);


app.use(notFoundHandler);
app.use(globalErrorHandler);












app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));