import express from 'express';
import mainRouter from './src/routes/index.js';
import { initMongoDB } from './src/repository/db/initDB.js';


const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('listening on port 3000');
});
await initMongoDB();

app.use('/', mainRouter);