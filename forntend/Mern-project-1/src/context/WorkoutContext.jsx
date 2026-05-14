import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

const workoutReducer = (state, action)=>{
    switch(action.type){
        case "SET_WORKOUT":
            return{
                workouts: action.payLoad
            }
            case "CREATE_WORKOUT": return{
                workouts : [action.payLoad, ...state.workouts]
            }
            case "DELETE_WORKOUT": return{
                workouts: state.workouts.filter((each)=>
                    each._id !== action.payload._id
                )
            }
            default: return state
}
}




export const WorkoutContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(workoutReducer,{
    workouts: []
})
    return(
    <WorkoutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutContext.Provider>)
}