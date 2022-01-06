import axios from 'axios';

const url = 'http://localhost:4000/posts';
//read
export const fetchPosts = () => axios.get(url);
//write
export const createPost = (newPost) => axios.post(url, newPost);
//Update Post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//Delete Post
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//Like Post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);