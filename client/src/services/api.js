import axios from 'axios';


const url = 'http://localhost:8000';
export const createPost = async (post) => {
   try{
     return await axios.post(`${url}/create`,post)
   }catch(error){
      console.log('Error while calling create post Api', error);
   }
}

export const getAllPosts = async (params) => {
   try{
      let response = await axios.get(`${url}/posts${params}`);
      return response.data;
   }catch(error){
      console.log('Error while calling get posts api',error);
   }
}

export const getPost = async (id) => {
   try{
      let response = await axios.get(`${url}/post/${id}`);
      return response.data;
   }catch(error){
      console.log('Error while calling get post api',error);
   }
}

export const updatePost = async (id,post) =>{
   try{
      await axios.post(`${url}/update/${id}`,post)
   }catch(error){
      console.log('Errror while calling update post api',error)
   }
}

export const deletePost = async (id) => {
   try{
      await axios.delete(`${url}/delete/${id}`)
   }catch(error){
      console.log('Errror while calling delete post api',error)
   }
} 

export const uploadFile = async (data) => {
   try{
      return await axios.post(`${url}/file/upload`, data);
   }catch(error){
      console.log('Error while calling upload file api',error);
   }
}

export const newComment = async (comment) => {
   try {
       return await axios.post(`${url}/comment/new/`, comment);
   } catch(error) {
       console.log('Error while calling newComment API ', error)
   } 
}

export const getComments = async (id) => {
   try {
       let response = await axios.get(`${url}/comments/${id}`);
       return response.data;
   } catch(error) {
       console.log('Error while calling getComments API ', error)
   } 
}

export const deleteComment = async (id) => {
   try {
       return await axios.delete(`${url}/comment/delete/${id}`);
   } catch(error) {
       console.log('Error while calling deleteComments API ', error)
   } 
}