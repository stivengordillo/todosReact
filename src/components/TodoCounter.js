import React from "react";
import '../styles/style.css';
//Se remplaza el guion de los estilos por la letra en mayuscula EJ border-radius = borderRadius y el style={{}}
function TodoCounter({total, completed}){

    return(
        <h2 className ="TodoCounter" >Has completado {completed} de {total} tareas :)</h2>
    );
}

export { TodoCounter };