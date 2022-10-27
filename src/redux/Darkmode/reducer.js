import { TOGGLE } from "./action";

const initialState = {
    mode : false
}
  
const modeReducer = (state=initialState,action) =>{
    switch(action.type){

        case TOGGLE : 
            return{
                ...state,
                mode : !state.mode
            }
        default : 
            return state
    }
}

export default modeReducer