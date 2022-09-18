import React from "react";

function CreateButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
            className="CreateButton"
            onClick={onClickButton}
        >
            Agregar Otra tarea
        </button>
    );
}

export {CreateButton};