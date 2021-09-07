import React from 'react'

export default function Movie(props) {
    return (
        <div className="card">
            <div className ="container">
                <img src='https://cutt.ly/CWtY6Nn' alt="John Wick" width ="100%" height="230px"/>
                <h3>{props.name}</h3>
                <h4>{props.genre} - {props.year}</h4>
            </div>
            
        </div>
    )
}
