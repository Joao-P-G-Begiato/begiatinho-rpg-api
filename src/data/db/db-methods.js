const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')
const UserModel = require('../../domain/models/UserModel')
dotenv.config()



class MongoDBMethods{
    constructor(url){
        this.client = new MongoClient(url)
    }

    async connectDB(){
        try{
            const db = await this.client.connect()
            console.log("successful connection")
            return db.db("RPG-API")
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
                console.log(creation)
                return true
            }
        }catch (e){
            console.log(e)
            console.log("Creation Error")
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
            await this.client.close()
        }
    }


}

const url = process.env.DB_URL

const user = new UserModel("João", "jpbegiato", "Dudadema@3005", "jpbegiato@hotmail.com")

const filter = {login: 'jpbegiato'}
const schema = {
    password: false
}



const testeConnection = new MongoDBMethods(url)
async function returnUser(){
    const result = await testeConnection.findOne("users", filter, schema)
    console.log(result)
} 

const teste = returnUser()