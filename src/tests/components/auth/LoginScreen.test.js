import React from 'react';
import { mount,shallow} from 'enzyme';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState  = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
};

let store =  mockStore(initState);
store.dispatch= jest.fn();

import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin,starLoginEmailPasswordMiddleware } from '../../../actions/auth';
jest.mock('../../../components/auth/LoginScreen',()=>({
    startGoogleLogin: jest.fn(),
    starLoginEmailPasswordMiddleware:jest.fn()
}));



const wrapper = shallow(
    <Provider store = {store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
);


describe('Pruebas en <LoginScreen />', () => {    

    beforeEach(()=>{
        store =  mockStore(initState);
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    }); 

    //MOUNT VERSION INCOPATIBLE
    /*test('Debe de disparar la accion de startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect( startGoogleLogin).toHaveBeenCalled();
    })
    
    test('Debe de disparar la accion starLoginEmailPasswordMiddleware',()=>{
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect( starLoginEmailPasswordMiddleware).toHaveBeenLastCalledWith('noelia@gmail.com','123456');
    })*/
});
