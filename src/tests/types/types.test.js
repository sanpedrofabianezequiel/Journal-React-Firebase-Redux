
import '@testing-library/jest-dom'
import { types } from '../../types/types'

describe('Pruebas con nuestros Types', () => {

    test('Debe de tener estos Types ', () => {
        
        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdate: '[Notes] Updated note',
            notesFileUrl: '[Notes] Update image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning'
        });
    })
    
    
})
