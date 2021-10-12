import { finishLoading, removeErrorAction, setErrorAction, startLoading } from "../../actions/ui";
import { types } from "../../types/types";


describe('Pruebas en ui-actions', () => {
    test('Todas las acciones deben de funcionar', () => {
         const action =  setErrorAction('Error');

         expect(action).toEqual({
             type:types.uiSetError,
             payload:'Error'
         })

         const removeError = removeErrorAction();
         const startLoadingAction = startLoading();
         const finishLoadingAction = finishLoading();

         expect(removeError).toEqual({
             type:types.uiRemoveError
         })

         expect(startLoadingAction).toEqual({
             type:types.uiStartLoading
         });

         expect(finishLoadingAction).toEqual({
             type:types.uiFinishLoading
         })
    });
    
})
