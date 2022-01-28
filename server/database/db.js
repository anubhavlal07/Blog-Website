import mongoose from 'mongoose';


const connection = async () => {
   try{

      const url ='mongodb://anubhavlal:anubhavlal@blogwebsite-shard-00-00.whzc5.mongodb.net:27017,blogwebsite-shard-00-01.whzc5.mongodb.net:27017,blogwebsite-shard-00-02.whzc5.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-5z6lc8-shard-0&authSource=admin&retryWrites=true&w=majority';
   
      await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true});
      console.log('Database connection established');
   }catch(error){
      console.log('Error while connecting to database',error);
   }
}

export default connection;