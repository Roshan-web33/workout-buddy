import { act } from "react";

import { createContext, useReducer } from "react";

export const AuthContext = createContext()



export const authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN":
        return {user: action.playLoad}
        case "LOGOUT" : return {user:null}
        default: return state
    }
}


export const AuthContextProvider = ({children})=>{
    const [state, dispatch] =useReducer(authReducer,{
        user:null
    })

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}