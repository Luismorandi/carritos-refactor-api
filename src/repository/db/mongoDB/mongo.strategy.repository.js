import mongoose from 'mongoose';

export default class MongoDB{
    constructor(collection,schema){
        this.collection = mongoose.model(collection, schema);}

    async getAll(){
        try{
            const docs = await this.collection.find();
            return docs;
        }catch(error){
            console.log('error getall mongoose',error);
        }
    }

    async getById(id){
        try{
            const doc = await this.collection.findById(id);
            return doc;
        }catch(error){
            console.log('error getById mongoose',error);
        }
    }

    async getByQuery(query){
        try{
            const doc = await this.collection.find(query);
            return doc;
        }catch(error){
            console.log('error getByQuery mongoose',error);
        }


    }


}