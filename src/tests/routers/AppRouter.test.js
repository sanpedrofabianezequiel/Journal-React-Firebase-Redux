import React from 'react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:{
            id:'ABC',
        },
        notes:[]
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn(); //no necesito un mock aca por que realmente   uiero que se ejecute el DISPATCH
import { loginFunction } from '../../actions/auth';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { AppRouter } from '../../routers/AppRouter';
import { mount, shallow } from 'enzyme';
import {firebase} from '../../firabase/firebase-config';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';
jest.mock('sweetalert2',()=>({
    fire:jest.fn()
}));
jest.mock('../../actions/auth',()=>({
    loginFunction : jest.fn(),
}));
describe('Pruebas en <AppRouter/>', () => {
    
    beforeEach(()=>{
        store =  mockStore(initState);
    });

   /*/ test('debe de llamar el login si estoy autenticado ',async () => {
        let user;
        await act(async()=>{
            const userCred =  await firebase.auth().signInWithEmailAndPassword('test@testing.com','123456');
            user = userCred.user;
           // console.log(userCred);
           //console.log(store.getActions());
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            );
        });
       // expect(loginFunction).toHaveBeenCalledWith('BVSODlxwtVe04P8efG7zpYZ5agQ2',null);
    })*/
    test('should ', () => {
        
    })
    
    
})
