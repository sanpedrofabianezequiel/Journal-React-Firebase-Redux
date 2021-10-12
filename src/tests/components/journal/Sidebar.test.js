import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';
import {Sidebar} from '../../../components/journal/Sidebar';
import {startLogoutMiddelware} from '../../../actions/auth';
jest.mock('../../../actions/auth',()=>({
    startLogoutMiddelware:jest.fn()
}));
import {startNewNote} from '../../../actions/notes';
jest.mock('../../../actions/notes',()=>({
    startNewNote:jest.fn()
}))
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const initState = {
    auth:{
        uid:'1',
        name:'ezequiel'
    },
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:null,
        notes:[]
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <SideBar />', () => {
    beforeEach(()=>{
        store =  mockStore(initState);
    });
    const wrapper =  mount(
        <Provider store={store}>
            <Sidebar />
        </Provider>
    );
    test('debe de mostrarse correctamente', () => {
        //snpashot
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar el startLogout', () => {
        wrapper.find('button').prop('onClick')();

        expect(startLogoutMiddelware).toHaveBeenCalled();
    })
    
    test('debe de llamar el startNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();

        expect(startNewNote).toHaveBeenCalled();
    })
    
    
    
})
