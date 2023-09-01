const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')
const UserModel = require('../../domain/models/UserModel')
dotenv.config()



class MongoDBMethods{
    constructor(url){
        console.log(url)
        this.client = new MongoClient(url)
    }

    async connectDB(){
        console.log(this.client)
        try{
            await this.client.connect()
            await this.client.db().admin().listDatabases()
            .then(console.log("successful connection"))
        }catch (e) {
            console.log("connection Error: " + e) 
        } finally{
            await this.client.close()
        }
    }

    async insertSingleDocument(collection, document){
        try{
            await this.client.connect()
            await this.client.db.collection(collection).insertOne(document)
        }catch (e){
            console.log(e)
        }finally{
            await this.client.close()
        }
    }

    async insertSingleDocument(collection, document){
        try{
            await this.client.connect()
            await this.client.db.collection(collection).insertOne(document)
        }catch (e){
            console.log(e)
        }finally{
            await this.client.close()
        }
    }

    async find(collection, filter , returnSchema){
        try{
            await this.client.connect()
            await this.client.db.collection(collection).find(filter, returnSchema)
        }catch (e){
            console.log(e)
        }finally{
            await this.client.close()
        }
    }


}

// const teste = new MongoDBMethods(process.env.DB_URL)

const url = process.env.DB_URL
console.log(url)

const user = new UserModel("João", "jpbegiato", "Dudadema@3005", "jpbegiato@hotmail.com")
Object.assign(user, )




const addUser = new MongoDBMethods(url).connectDB()