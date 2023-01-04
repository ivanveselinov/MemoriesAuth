import axios from 'axios';
// if host is not wori
                                    // Heroku                                 // LocalHost
const API = axios.create({ baseURL: 'https://memoriesauth-production.up.railway.app/' || 'http://localhost:4000' })
// const API = axios.create({ baseURL: 'http://localhost:4000' });
// please note if main link is not working, it will not switch to localhost !!!!!!

// To check for users from middleware
API.interceptors.request.use((req) => { 
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` //get token from middleware
    }
    return req;
});

//read
export const fetchPosts = () => API.get('/posts');
//Create
export const createPost = (newPost) => API.post('/posts', newPost);
//Update Post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
//Delete Post
export const deletePost = (id) => API.delete(`/posts/${id}`);
//Like Post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
//Sign In
export const signIn = (formData) => API.post('/user/signIn', formData); //path must be same as server index.js
//Sign up
export const signUp = (formData) => API.post('/user/signUp', formData); //path must be same as server index.js
