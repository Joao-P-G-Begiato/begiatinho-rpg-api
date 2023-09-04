const {MongoClient, ObjectId} = require('mongodb')
const dotenv = require('dotenv')

class MongoDBMethods{
    constructor(url, database){
        this.client = new MongoClient(url)
        this.database = database
    }

    async connectDB(){
        try{
            const db = await this.client.connect()
            console.log("successful connection")
            return db.db(this.database)
        }catch (e) {
            console.log(e) 
            console.log("Connection Error") 
            return false
        }
    }

    async insertSingleDocument(collection, document){
        try{
            const db = await this.connectDB()
            if(db){
                const creation = await db.collection(collection).insertOne(document)
                return creation
            }
        }catch (e){
            console.log(e)
            console.log("Creation Error")
        }finally{
            await this.client.close(true)
        }
    }

    async findOne(collection, filter , returnSchema){
        try{
            const db = await this.connectDB()
            if(db){
                console.log(returnSchema)
                const find = await db.collection(collection).findOne(filter,{ projection:returnSchema})
                return find
            }

        }catch (e){
            console.log(e)
        }finally{
            await this.client.close(true)
        }
    }

    async deleteOneById(collection, id){
        try{
            const db = await this.connectDB()
            if(db){
                const idToDelete = new ObjectId(id)
                const deleteEntry = await db.collection(collection).deleteOne({_id: idToDelete})
                return deleteEntry
            }

        }catch (e){
            console.log(e)
        }finally{
            await this.client.close(true)
        }
    }

    async updateOneById(collection, id, update){
        try{
            const db = await this.connectDB()
            if(db){
                const idToUpdate = new ObjectId(id)
                const updateEntry = await db.collection(collection).updateOne({_id: idToUpdate}, {$set: update} )
                return updateEntry
            }

        }catch (e){
            console.log(e)
        }finally{
            await this.client.close(true)
        }
    }
}
