import configureStore from 'redux-mock-store' //ES6 module
import  thunk from 'redux-thunk';

const middlewares = [thunk] //Nuestro middleware es el thunk
const mockStore = configureStore(middlewares)


import { fileUpload } from '../../helpers/fileUpload';
jest.mock('../../helpers/fileUpload',()=>({  //Requiere que este entre parentesis por que es un objet de funciones
    //SImulo la funcion que quiero del mock
    fileUpload: jest.fn(async()=>{//Simulo que me retorne una URL
        //return 'https://hola-mundo/cosa.jpg',
        return await Promise.resolve('https://hola-mundo/cosa.jpg');
    })
}));


const initState = {
    auth:{
        uid:'TESTING'
    },
    notes:{
        active:{
            id:'MpGtVPTZc0wQtctUdzgr',
            title:'Hola',
            body:'mundoo'
        }
    }
};

let store =  mockStore(initState);

import {startLoadingNotes, startNewNote, startSaveNote, startUploading} from '../../actions/notes';
import { db } from '../../firabase/firebase-config';
import { types } from '../../types/types';





describe('Pruebas con las acciones de notes', () => {
    
    beforeEach(()=>{
        store = mockStore(initState);
    })
    
  
  
  
    test('debe de crear una nueva nota startNewNote',async () => {
        await store.dispatch(startNewNote());

        const actions =  store.getActions();
        //console.log(actions);

        expect(actions[0]).toEqual({
            type:types.notesActive,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
        expect(actions[1]).toEqual({
            type:types.notesAddNew,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
        expect(actions[0]).toEqual({
            type:types.notesActive,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
        //console.log(actions[0].payload.id);
        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${docId}`).delete();
    });

    /*test('startLoadingNotes debe de cargar las notas', async() => {
        await store.dispatch(startLoadingNotes(initState.auth.uid));
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type:types.notesLoad,
            payload:expect.any(Array)
        });

        const expected = {
            id:expect.any(String),
            title:expect.any(String),
            body:expect.any(String),
            date:expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    })*/

   /* test('startSaveNote debe de actualizar la nota', async () => {
        const note = {
            id :'MpGtVPTZc0wQtctUdzgr',
            title:'titulo2',
            body:'body'
        }

        await store.dispatch(startSaveNote(note));

        const actions =  store.getActions();
        expect(actions[0].type).toBe(types.notesUpdate);

        const docRef =  await db.doc(`/TESTING/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);
    })*/
    

  /*  test('startUpLoading debe de actualizar el url del entry', async () => {

        const file =  new File([],'foto.jpg');
        await store.dispatch(startUploading(file));
        //Necesitamos realizar un moc de FILEUPLOAD, por que lo requiere la action anterior

        const docRef = await db.doc('/TESTING/journal/notes/MpGtVPTZc0wQtctUdzgr').get();
        expect(docRef.data().url).toBe('https://hola-mundo/cosa.jpg')

    })
    */
    
    
})
