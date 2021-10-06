import { types } from "../types/types";




const initialState = {
     notes:[],
     active:null
}

export const notesReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.notesActive:
            return {
               ...state,
               active:{
                   ...action.payload
               }
            }
        case types.notesLoad:
            //console.log(action.payload );
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    item => item.id ===action.payload.id
                        ? action.payload.note
                        : item
                )
            }
        case types.notesDelete://Filter regresa todas las notas menos las que seleccione
        //console.log(action.payload);
            return {
                ...state,
                active:null,
                notes: state.notes.filter( item => item.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            //return {}
            return {
                ...state,
                action:null,
                notes:[]
            }
        case types.notesAddNew:

        //Agregamos al array, en la posicion anterior ala que esta, asi es el primero q se muestra
        //asi actualizo lo que tengo y agrego los nuevos valos
        //debemos trabajar con el state;
            return {
                ...state,
                notes : [ action.payload,...state.notes ]
            }
        default:
            return state;
    }
}