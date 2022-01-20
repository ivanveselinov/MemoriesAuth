import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })

//read
export const fetchPosts = () => API.get('/posts');
//Create
export const createPost = (newPost) => API.post('/posts', newPost);
//Update Post
export const updatePost = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost);
//Delete Post
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);
//Like Post
export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`);
//Sign In
export const signIn = (formData) => API.post('/user/signin', formData); //path must be same as server index.js
//Sign up
export const signUp = (formData) => API.post('/user/signup', formData); //path must be same as server index.js
