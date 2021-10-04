import { types } from "../types/types";

const initialState = {
    loading:false,
    msg:null
}

export const uiReducer = (state = initialState ,action)=>{
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msg:action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msg:null
            }            

        case types.uiStartLoading:
            return {
                ...state,
                loading:true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading:false
            }
        default:
            return initialState;
    }


}