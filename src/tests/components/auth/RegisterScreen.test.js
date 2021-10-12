import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares)
const initState = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
}
let store = mockStore(initState);

const wrapper = shallow(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <RegisterScreen />', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    });
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    /*test('debe de hacer el dispatch de la accion respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change',{
            target:{
                value:'',
                name:'email'
            }
        });

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        })
        
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:types.uiSetError,
            payload:'Email is invalid'
        })
    })*/
    
})
