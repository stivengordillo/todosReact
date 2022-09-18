import React from "react";
import '../styles/style.css';
import { TodoContext } from "../TodoContext";
//Se remplaza el guion de los estilos por la letra en mayuscula EJ border-radius = borderRadius y el style={{}}
function TodoCounter(){
    const{ totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className ="TodoCounter" >Has completado {completedTodos} de {totalTodos} tareas :)</h2>
    );
}

export { TodoCounter };