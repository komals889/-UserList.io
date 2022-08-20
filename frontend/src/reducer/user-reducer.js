import { ADMIN_FAIL, ADMIN_REQUEST, ADMIN_SUCCESS, DELETE_FAIL, DELETE_REQUEST, DELETE_SUCCESS, FIND_POST_BIKE_FAIL, FIND_POST_BIKE_REQUEST, FIND_POST_BIKE_SUCCESS, LOGIN_BIKE_FAIL, LOGIN_BIKE_REQUEST, LOGIN_BIKE_SUCCESS, POST_BIKE_FAIL, POST_BIKE_REQUEST, POST_BIKE_SUCCESS, SINGLE_BIKE_FAIL, SINGLE_BIKE_REQUEST, SINGLE_BIKE_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS, USER_BIKE_FAIL, USER_BIKE_REQUEST, USER_BIKE_SUCCESS, USER_LOGIN_BIKE_FAIL, USER_LOGIN_BIKE_REQUEST, USER_LOGIN_BIKE_SUCCESS, USER_LOGOUT } from "../constants/user-constants";

export const getAllUserReducer = (state={userredux:[]},{type,payload}) => {
     switch (type) {
         case USER_BIKE_REQUEST: return { userredux: [] ,isloading:true}
         case USER_BIKE_SUCCESS : return{userredux:payload,isloading:false}
         case USER_BIKE_FAIL : return{userreduxError:payload,isloading:false}
         default:
             return state
     }
}
export const singleUserReducer = (state={singleUserredux:{}},{type,payload}) => {
     switch (type) {
         case SINGLE_BIKE_REQUEST: return { singleUserredux: {},isloading:true}
         case SINGLE_BIKE_SUCCESS : return{singleUserredux:payload,isloading:false}
         case SINGLE_BIKE_FAIL : return{singleUserreduxError:payload,isloading:false}
         default:
             return state
     }
}

// export const loginReducer = (state={loginRedux:{}},{type,payload}) => {
//      switch (type) {
//          case LOGIN_BIKE_REQUEST: return {loginRedux : {},isloading:true}
//          case LOGIN_BIKE_SUCCESS : return{loginRedux:payload,isloading:false}
//          case LOGIN_BIKE_FAIL : return{loginReduxError:payload,isloading:false}
//          default:
//              return state
//      }
// }
export const userloginReducer = (state={},{type,payload}) => {
     switch (type) {
         case USER_LOGIN_BIKE_REQUEST: return {isloading:true}
         case USER_LOGIN_BIKE_SUCCESS : return{userloginRedux:payload,isloading:false}
         case USER_LOGIN_BIKE_FAIL: return { userloginReduxError: payload, isloading: false }
         case USER_LOGOUT : return {}
         default:
             return state
     }
}
export const postDataReducer = (state = { postData: {} },{type,payload}) => {
     switch (type) {
         case POST_BIKE_REQUEST: return {postData:{},isloading:true}
         case POST_BIKE_SUCCESS : return{postData:payload,isloading:false}
         case POST_BIKE_FAIL: return { postDataError: payload, isloading: false }
         default:
             return state
     }
}

export const findPostDataReducer = (state = { findPostData: [] },{type,payload}) => {
     switch (type) {
         case FIND_POST_BIKE_REQUEST: return {findPostData: [],isloading:true}
         case FIND_POST_BIKE_SUCCESS : return{findPostData:payload,isloading:false}
         case FIND_POST_BIKE_FAIL: return { findPostDataError:payload, isloading: false }
         default:
             return state
     }
}
export const adminUserDataReducer = (state = { adminData: [] },{type,payload}) => {
     switch (type) {
         case ADMIN_REQUEST: return {adminData: [],isloading:true}
         case ADMIN_SUCCESS : return{adminData:payload,isloading:false}
         case ADMIN_FAIL: return { adminDataError:payload, isloading: false }
         default:
             return state
     }
}
export const deleteDataReducer = (state = { deleteData: {}},{type,payload}) => {
     switch (type) {
         case DELETE_REQUEST: return {deleteData: {},isloading:true}
         case DELETE_SUCCESS : return{deleteData:{},isloading:false}
         case DELETE_FAIL: return { deleteError:payload, isloading: false }
         default:
             return state
     }
}

export const updateDataReducer = (state = { updateData: {}},{type,payload}) => {
     switch (type) {
         case UPDATE_REQUEST: return {updateData: {},isloading:true}
         case UPDATE_SUCCESS : return{updateData:{},isloading:false}
         case UPDATE_FAIL: return { updateError:payload, isloading: false }
         default:
             return state
     }
}