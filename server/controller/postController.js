import Post from "../schema/postSchema.js";

export const createPost = async (request,response) => {
   console.log(request.body);
   try{
      const post = await new Post(request.body);
      post.save();
      response.status(200).json('blog saved successfully');
      console.log('blog saved successfully');
   }catch(error){
      response.status(500).json(error);
   }
}

export const getAllPosts = async (request,response) => {
   let posts;
   let username = request.query.username;
   let category = request.query.category;
   try{
      if(username){
         posts = await Post.find({ username: username});
      }
      else if(category){
         posts = await Post.find({ categories: category});
      }
      else{
         posts = await Post.find({});
      }
      response.status(200).json(posts);
   }catch (error) {
      response.status(500).json(error);
   }
}

export const getPost = async (request, response) => {
   try{
      let post = await Post.findById(request.params.id);
      response.status(200).json(post);
   }catch(error){
      response.status(500).json(error);
   }
}

export const updatePost = async (request, response) => {
   try{
      await Post.findByIdAndUpdate(request.params.id,{$set: request.body});
      response.status(200).response('Blog Updated');
   }catch(error){
      response.status(500).json(error);
   }
}

export const deletePost = async (request, response) => {
   try{
      let post = await Post.findById(request.params.id);
      await post.delete();
      response.status(200).response('Blog deleted');
   }catch(error){
      response.status(500).json(error);
   }
}