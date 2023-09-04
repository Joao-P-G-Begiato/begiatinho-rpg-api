const {MongoClient, ObjectId} = require('mongodb')
const dotenv = require('dotenv')
const UserModel = require('../../domain/models/UserModel')
dotenv.config()



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

    async deleteOne(collection, id){
        try{
            const db = await this.connectDB()
            if(db){
                const idToDelete = new ObjectId(id)

                const deleteEntry = await db.collection(collection).deleteOne({_id: idToDelete})
                console.log(deleteEntry)
                return deleteEntry
            }

        }catch (e){
            console.log(e)
        }finally{
            await this.client.close(true)
        }


    }


}

// const url = process.env.DB_URL

// const user = new UserModel("João", "jpbegiato", "Dudadema@3005", "jpbegiato@hotmail.com")

// const filter = {login: 'jpbegiato'}
// const schema = {
//     password: false
// }



// const client = new MongoDBMethods(url)
// async function returnUser(){
//     const result = await client.findOne("users", filter, schema)
//     console.log(result)
// } 

// const teste = returnUser()

// const deleteTest = client.deleteOne("users", "64f611cc0d25a0f71bfacd51")
// console.log(deleteTest)