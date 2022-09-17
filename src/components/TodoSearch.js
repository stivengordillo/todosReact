import React from "react";

function TodoSearch({search, setSearch}){
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