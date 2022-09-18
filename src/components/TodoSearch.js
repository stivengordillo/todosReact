import React from "react";
import { TodoContext } from "../TodoContext";
function TodoSearch(){
    const {search, setSearch} = React.useContext(TodoContext);
    const onSearchValueChange = (event) =>{
        const eventResult = event.target.value
        setSearch(eventResult)
    }
    return[
        <section 
            className="TodoSearch"
            value = {search}
            onChange={onSearchValueChange}
        >
            <input placeholder="Cebolla" />
            <p>{search}</p>
        </section>
        
    ];
}

export {TodoSearch};