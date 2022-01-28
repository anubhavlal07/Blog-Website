import express, { Router } from 'express';
import { createPost, getAllPosts, getPost, updatePost, deletePost } from "../controller/postController.js";
import { uploadImage, getImage } from '../controller/imageController.js';
import upload from '../utilities/upload.js'
import { newComment,getComment,deleteComment } from '../controller/commentController.js';

const router = express.Router();

router.post('/create', createPost);

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComment);
router.delete('/comment/delete/:id', deleteComment);

export default router;