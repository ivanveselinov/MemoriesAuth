/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  
    switch (action.type) {
        case FETCH_ALL :   //read
            return action.payload;
        case CREATE :      //create
            return [...posts, action.payload];
        case UPDATE :       //update     
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE :       //Delete
            return posts.filter((post) => post._id !== action.payload);
            default:
                return posts;
    }
}
