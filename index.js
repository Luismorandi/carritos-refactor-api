import express from 'express';
import mainRouter from './src/routes/index.js';
import { initMongoDB } from './src/repository/db/initDB.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(cors());


// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
});
await initMongoDB();

app.use('/', mainRouter);