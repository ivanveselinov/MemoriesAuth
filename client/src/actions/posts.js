import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

//Action Creators
                    // Read post
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL , payload: data });

    } catch (error) {
        console.log(error);
    }
}
                    //Write Post
export const createPost = (post) => async (dispatch) => {
        try {
            const { data } = await api.createPost(post);
            dispatch ({ type: CREATE , payload: data})
            
        } catch (error) {
            console.log('hate me',error);
        }
    }
                    //Update Post
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log('love me',error);
    }
}

    
                    //Delete Post
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id})
        } catch (error) {
        console.log(error);
    }
}

                    //Like Post -- same as update
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data })  // IF its not UPDATE WONT INCREMENT BY ONE
    } catch (error) {
        console.log(error);
    }
}
