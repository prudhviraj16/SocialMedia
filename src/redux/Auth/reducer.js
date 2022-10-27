import { Action } from "@remix-run/router";
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./action";

const initialState = {
    user : null,
    loading : false,
    error : false
}

const userReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,

            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                news : action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error : "Please try again later"
            }
        default :
            return state
    }
}

export default userReducer