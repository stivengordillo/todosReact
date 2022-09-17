import React from "react";

function CreateButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }
    return(
        <button 
            className="CreateButton"
            onClick={ () =>onClickButton('Este es el mensaje')}
        >
            Agregar Otra tarea
        </button>
    );
}

export {CreateButton};