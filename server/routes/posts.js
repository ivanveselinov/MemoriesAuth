import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../contollers/posts.js'

const router = express.Router(); // createing router
      
router.get('/', getPosts);        // Read Post
router.post('/', createPost);     // Write Post
// router.get('/:id', getPosts);  // get post by id
router.patch('/:id', updatePost);  // Update Post
router.delete('/:id', deletePost); // Delete Post
router.patch('/:id/likePost', likePost); // Like Post
export default router;


