import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off"/>
                <textarea placeholder="What happened today" className="notes__textarea" >

                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://wallpaperstock.net/wallpapers/thumbs1/37068hd.jpg"
                        alt="mi image"
                    />
                </div>
            </div>
        </div>
    )
}
