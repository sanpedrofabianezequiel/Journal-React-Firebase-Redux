import Swal from "sweetalert2";
import { db } from "../firabase/firebase-config"
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote = ()=>{
    return async (dispatch,getState) =>{
        //If the user is aunthenticated, we will set that ID how a new "namr or id name Collection"
        const {uid} = getState().auth; //is the samen if we use only destructuration
        const newNote = {
            title:'',
            body:'',
            date:new Date().getTime()
        }

        try {
            
            const docRef= await db.collection(`${uid}/journal/notes`).add(newNote);
           // console.log(docRef);
           dispatch(activeNote(docRef.id,newNote));//Envia el OBJ Action y llena el dispatch
           dispatch(addNewNote(docRef.id,newNote))
        } catch (error) {
            console.log(error);
        }
    }
}

export const addNewNote = (id,note)=>({
    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const activeNote = (id,note) =>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) =>{
    return async (dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch(setNote(notes));
    }
}
export const setNote = (notes)=>({
    type:types.notesLoad,
    payload: notes
})

export const startSaveNote = (note)=>{ //Actualizo x el id de usuario y id de note
    return async(dispatch,getState) =>{

        const {uid} = getState().auth; //Obtendo el ID del usuario o collecion q voy a guardar en firebas

        if(!note.url){
            delete note.url //si no esta direcetamente no la descompongo
        }

        const noteToFirestore = {...note}

        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refresNote(note.id, noteToFirestore));//Podriamos enviar el note tambien
        Swal.fire('Saved', note.title,'success');
    }
}

export const refresNote = (id, note )=>({
    type:types.notesUpdate,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
})


export const startUploading = (file )=>{
    return async (dispatch,getState)=>{
        const { active:activeNote} = getState().notes;

        Swal.fire({
            title:'Uploading...',
            text:'Plase wait...',
            allowOutsideClick:false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        //console.log(fileUrl);
        activeNote.url = fileUrl; //Actualizo el URL QUE TENGO EL STORE previamente lo obtuve con getState
        dispatch(startSaveNote(activeNote));

        Swal.close();//Cierra el loading
    }
}

export const startDeleting = (idNote) =>{
    return  async(dispatch,getState )=>{
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${idNote}`).delete();
        

        //Actualizo mi store solo ese compnente
        dispatch(deleteNote(idNote));
    }
}


export const deleteNote = (idNote)=>({
    type:types.notesDelete,
    payload:idNote
});


export const noteLogout = ()=>({
    type:types.notesLogoutCleaning
})