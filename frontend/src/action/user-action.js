import { ADMIN_FAIL, ADMIN_REQUEST, ADMIN_SUCCESS, DELETE_FAIL, DELETE_REQUEST, DELETE_SUCCESS, FIND_POST_BIKE_FAIL, FIND_POST_BIKE_REQUEST, FIND_POST_BIKE_SUCCESS, LOGIN_BIKE_FAIL, LOGIN_BIKE_REQUEST, LOGIN_BIKE_SUCCESS, POST_BIKE_FAIL, POST_BIKE_REQUEST, POST_BIKE_SUCCESS, SINGLE_BIKE_FAIL, SINGLE_BIKE_REQUEST, SINGLE_BIKE_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS, USER_BIKE_FAIL, USER_BIKE_REQUEST, USER_BIKE_SUCCESS, USER_LOGIN_BIKE_FAIL, USER_LOGIN_BIKE_REQUEST, USER_LOGIN_BIKE_SUCCESS, USER_LOGOUT } from "../constants/user-constants";
import axios from 'axios'
export const  getAllUserAction= () => async(dispatch) => {
    try {
        dispatch({ type:USER_BIKE_REQUEST})
        const { data } = await axios.get("http://localhost:5000/api/v1");
        console.log(data.data);
        dispatch({ type:USER_BIKE_SUCCESS,payload:data.data})
    } catch (error) {
     dispatch({ type:USER_BIKE_FAIL,payload:error})
    }
 } 
export const singleBikeAction= (id) => async(dispatch) => {
    try {
        dispatch({ type:SINGLE_BIKE_REQUEST})
        const { data } = await axios.get(`http://localhost:5000/api/v1/${id}`);
        // console.log(data.data);
        dispatch({ type:SINGLE_BIKE_SUCCESS,payload:data.data})
    } catch (error) {
     dispatch({ type:SINGLE_BIKE_FAIL,payload:error})
    }
 } 
export const signupAction= (userSignUp) => async(dispatch) => {
    try {
        dispatch({ type:LOGIN_BIKE_REQUEST})
        const { data } = await axios.post("http://localhost:5000/api/v1/signup",userSignUp);
        dispatch({ type:LOGIN_BIKE_SUCCESS,payload:data.data})
        // console.log(data);
    } catch (error) {
     dispatch({ type:LOGIN_BIKE_FAIL,payload:error})
    }
 } 
export const loginAction= (userLogin) => async(dispatch,getState) => {
    try {
        dispatch({ type:USER_LOGIN_BIKE_REQUEST})
        const { data } = await axios.post("http://localhost:5000/api/v1/login", userLogin);
        dispatch({ type: USER_LOGIN_BIKE_SUCCESS, payload: { info:data.allData, token: data.token} })
        localStorage.setItem("loginUser",JSON.stringify(getState().userLogin.userloginRedux))
    } catch (error) {
     dispatch({ type:USER_LOGIN_BIKE_FAIL,payload:error.response.data.message})
    }
 } 
export const postDataAction= (postData) => async(dispatch,getState) => {
    // console.warn("/////");
    // console.log(postData);
    try {
        dispatch({ type:POST_BIKE_REQUEST})
        const { data } = await axios.post("http://localhost:5000/api/v1", postData, {
            headers:{
                "Content-Type":"multipart/form-data "
            }
        });
        console.log(data.data);
        dispatch({ type: POST_BIKE_SUCCESS, payload:data.data })
    } catch (error) {
     dispatch({ type:POST_BIKE_FAIL,payload:error})
    }
} 
export const findPostDataAction= (id) => async(dispatch,getState) => {
    // console.warn("/////");
    // console.log(postData);
    try {
        dispatch({ type:FIND_POST_BIKE_REQUEST})
        const { data } = await axios.get(`http://localhost:5000/api/v1/find/${id}`);
        // console.log(data.data);
        dispatch({ type: FIND_POST_BIKE_SUCCESS, payload:data.data })
    } catch (error) {
     dispatch({ type:FIND_POST_BIKE_FAIL,payload:error})
    }
} 
export const adminUserDataAction= () => async(dispatch,getState) => {
    // console.warn("/////");
    // console.log(postData);
    try {
        dispatch({ type:ADMIN_REQUEST})
        const { data } = await axios.get("http://localhost:5000/api/v1/admin");
        // console.log(data.data);
        dispatch({ type: ADMIN_SUCCESS, payload:data.data })
    } catch (error) {
     dispatch({ type:ADMIN_FAIL,payload:error})
    }
} 

export const deleteDataAction= (id) => async(dispatch,getState) => {
    try {
        console.log(id);
        dispatch({ type:DELETE_REQUEST})
        const { data } = await axios.delete(`http://localhost:5000/api/v1/${id}`);
        dispatch({ type:DELETE_SUCCESS })
    } catch (error) {
     dispatch({ type:DELETE_FAIL,payload:error})
    }
} 

export const updateDataAction= (id,updateData) => async(dispatch) => {
    try {
        console.log(id);
        dispatch({ type:UPDATE_REQUEST})
        const { data } = await axios.put(`http://localhost:5000/api/v1/${id}`,updateData);
        dispatch({ type:UPDATE_SUCCESS })
    } catch (error) {
     dispatch({ type:UPDATE_FAIL,payload:error})
    }
} 
 
export const logOutAction= () => async(dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("loginUser")
} 



