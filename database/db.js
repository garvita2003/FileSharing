import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://user:123456789abc@ac-gc2wjyu-shard-00-00.05myga0.mongodb.net:27017,ac-gc2wjyu-shard-00-01.05myga0.mongodb.net:27017,ac-gc2wjyu-shard-00-02.05myga0.mongodb.net:27017/?ssl=true&replicaSet=atlas-7p2u76-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('error wile connecting with the database',error.message);
    }
}

export default DBConnection;