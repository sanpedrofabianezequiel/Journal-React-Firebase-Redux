import { db } from "../firabase/firebase-config"


export const loadNotes = async(uid)=>{
    const notesSnap=await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

 

    notesSnap.forEach(element => {
        notes.push({
            id:element.id,
            ...element.data()
        })
    });

    return notes;
}