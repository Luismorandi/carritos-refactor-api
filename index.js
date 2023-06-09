import express from 'express';
import mainRouter from './src/routes/index.js';
import { initMongoDB } from './src/repository/db/initDB.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
});
await initMongoDB();

app.use('/', mainRouter);