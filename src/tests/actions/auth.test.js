import { loginFunction, logout,startLogoutMiddelware ,starLoginEmailPasswordMiddleware } from "../../actions/auth";
import { types } from "../../types/types";


import configureStore from 'redux-mock-store' //ES6 module
import  thunk from 'redux-thunk';
const middlewares = [thunk] //Nuestro middleware es el thunk
const mockStore = configureStore(middlewares)
const initState = {};

let store =  mockStore(initState);




describe('Preubas con las acciones de Auth', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    })

    test('login y logut deben de crear la accion respectiva', () => {
    
        const uid = 'ABC123';
        const displayName = 'Ezequiel';

        const loginAction = loginFunction(uid,displayName);
        const logutAction = logout();

        expect(loginAction).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }  
        });

        expect(logutAction).toEqual({
            type:types.logout
        });
    })
    
    test('Debe de realizar el startLogoutMiddelware',async () => {

        await store.dispatch(startLogoutMiddelware())
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type:types.logout
        });

        expect(actions[1]).toEqual({
            type:types.notesLogoutCleaning
        });
    })

    test('debe de iniciar el starLoginEmailPasswordMiddleware ',async () => {
        await store.dispatch(starLoginEmailPasswordMiddleware('test@testing.com','123456'))

        const actions =  store.getActions();
        //Necesitamos que la funcione    return firebase.auth().signInWithEmailAndPassword(email,password) se un
        //RETURN por que sino las acciones estarian vacias
        //uid es el email creado en el test
        expect(actions[1]).toEqual({
            type:types.login,
            payload:{
                uid:'BVSODlxwtVe04P8efG7zpYZ5agQ2',
                displayName:null
            }
        });
    })
    
    
})
