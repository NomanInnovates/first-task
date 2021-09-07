import {LOGIN,LOGOUT ,CHECKUSER, SIGNIN} from "../constants/types";

const initialState = {
    isUserLoggedIn : false,
    user: [],
   }

export default function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case SIGNIN:{
            return {
                ...state,
                isUserLoggedIn:false,
                user: action.payload
            }
        }
        case LOGIN:
            return {
                ...state,
                isUserLoggedIn:true,
                user: action.payload
            }
        case CHECKUSER:
            return {
                ...state,
                isUserLoggedIn:true,
                user: action.payload
            }
        
        case LOGOUT:{
            return {
                ...state,
                isUserLoggedIn:false,
            }
        }
    
        
    default:
    return state;
}
}
