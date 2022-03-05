import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../contollers/posts.js'

import auth from '../middleware/auth.js';
const router = express.Router(); // createing router
      
router.get('/', getPosts);        // Read Post
router.post('/',auth, createPost);     // Write Post
// router.get('/:id', getPosts);  // get post by id
router.patch('/:id',auth, updatePost);  // Update Post
router.delete('/:id', auth,  deletePost); // Delete Post
router.patch('/:id/likePost', auth, likePost); // Like Post
export default router;

// Auth is for if there is a user he can create, update, delete and like posts 
// auth comes from middleWare!!


