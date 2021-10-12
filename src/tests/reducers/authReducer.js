import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"


describe('Pruebas en authReducer', () => {
    
    test('debe de realizar el login', () => {
        const iniState = {}

        const action ={
            type:types.login,
            payload:{
                uid:'abc',
                displayName:'ezequiel'
            }
        }

        const state =  authReducer(iniState,action);

        expect(state).toEqual({
            uid:'abc',
            displayName:'ezequiel'
        });
    })

    test('debe de realizar el logout', () => {
        const iniState = {}

        const action ={
            type:types.logout
        }

        const state =  authReducer(iniState,action);

        expect(state).toEqual({});
    })

    
    test('debe de retornar el state inicial', () => {
        const iniState = {}

        const action ={
            type:'actionErronea'
        }

        const state =  authReducer(iniState,action);

        expect(state).toEqual(iniState);
    })
    
    
})
