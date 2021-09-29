import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                  style={{
                      backgroundSize:'cover',
                      backgroundImage:'url(https://thumbs.dreamstime.com/b/isla-de-ponta-delgada-del-paisaje-la-monta%C3%B1a-azores-114700641.jpg)'
                  }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un Nuevo dia
                </p>
                <p className="journal__entry-content">
                    lorem imput lorem imput lorem imput lorem imput
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
