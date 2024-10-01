import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL)
       console.log(`connected MONGODB database on host" ${conn.connection.host}`)
    } catch (error){
        console.log("there is something wrong in db connection" )

    }
}


export default connectDB;