import mongoose from 'mongoose'
const connection ={}

const connectDB = handler => async(req, res)=> {
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    else{
        await mongoose.connect(process.env.MONGO_DB_URL)
        return handler(req,res)
    }
    // if(connection.isConnected){
    //     return;
    // }
    // const db = await mongoose.connect(process.env.MONGO_DB_URL, {
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // })
    // connection.isConnected = db.connections[0].readyState;
    // console.log(connection.isConnected)
}

export default connectDB