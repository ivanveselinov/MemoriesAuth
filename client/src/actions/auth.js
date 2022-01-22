import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

                // SIGN IN
export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);  // pass data from API INDEX

        dispatch({ type: AUTH, data }); // Redux

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

                // SIGN UP
export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);  // pass data from API INDEX

        dispatch({ type: AUTH, data }); // Redux

        history.push('/');  //home page
    } catch (error) {
        console.log(error);
    }
}