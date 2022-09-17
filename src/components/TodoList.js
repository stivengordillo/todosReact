import React from "react";

function TodoList(props){
    return(
        <section className="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
       
    )
}

export {TodoList};