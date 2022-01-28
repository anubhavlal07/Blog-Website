import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
const storage = new GridFsStorage({
   url:'mongodb://anubhavlal:anubhavlal@blogwebsite-shard-00-00.whzc5.mongodb.net:27017,blogwebsite-shard-00-01.whzc5.mongodb.net:27017,blogwebsite-shard-00-02.whzc5.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-5z6lc8-shard-0&authSource=admin&retryWrites=true&w=majority',
   options: { useNewUrlParser: true, useUnifiedTopology:true },
   file: (request,file) =>{
      const match = ["image/png","image/jpg"];

      if(match.indexOf(file.mimeType) === -1)
      {
         return `${Date.now()}-blog-${file.originalname}`;
      }
      else{
         return {
            bucketName: 'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
         }
      }
   }
})

export default multer ({storage});