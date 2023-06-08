/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
export const initMongoDB = async () => {

    try{
        mongoose
            .set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URL);
   
        console.log('Conectado a la base de datos' );
    } catch (error){
        console.log(`error ${error}`);
        return error;
    }
};
