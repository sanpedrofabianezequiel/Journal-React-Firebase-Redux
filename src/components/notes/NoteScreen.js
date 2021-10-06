import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NoteAppBar } from './NoteAppBar'
import { useForm} from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';
//react-journal

export const NoteScreen = () => {

    const { active:note} = useSelector(state => state.notes);
    const [formValues, handleInputeChange, reset] = useForm(note);
    const dispatch = useDispatch();

    //console.log(formValues)
    const { body, title } = formValues;
    const activeId = useRef(note.id);//referenciamos ese id para observar cuando cambie
    useEffect(() => {
        if(activeId.current !== note.id){
            reset(note);//reseteo el formulario para que vea con la nueva informacion
            activeId.current = note.id;
        }
    }, [reset,note]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues]);


    const handleDelete = ()=>{
        dispatch(startDeleting(activeId.current))
    }

    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off" name="title" value={title} onChange={handleInputeChange}/>
                <textarea placeholder="What happened today" className="notes__textarea" name="body"   value={body} onChange={handleInputeChange} ></textarea>
                {
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img 
                                src={note.url}
                                alt="mi image"
                            />
                        </div>
                    ) 
                }
            </div>

            <button className="btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
