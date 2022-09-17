import React from "react";

function TodoItem(props){

    return(
       <li className={`${props.completed && 'list-check'}`}>
        <span 
            className={` icon-face ${props.completed && 'icon-check'}`}
            onClick = { props.onComplete }
        >
        </span>
        <p className={` icon ${props.completed && 'texto-check'}`}>{props.text}</p>
        <span 
            className="TodoItemClose"
            onClick = { props.onDelete }
        >
            X
        </span>
       </li>
    );
}

export {TodoItem};