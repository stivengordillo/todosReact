import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [todos, setTodos] = React.useState(initialValue);
    React.useEffect(() => {
        setTimeout(()=>{
           try{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = [];
            }else{
                parsedItem = JSON.parse(localStorageItem);
            }
            setTodos(parsedItem);
            setLoading(false);
            }catch(error){
                setError(error)
            }
        }, 1500)
    });
    
    const saveTodos = (newTodos) =>{
        try{
            const stringifierTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifierTodos);
            setTodos(newTodos);
        }catch(error){
            setError(error)
        }
    };
    return {
        todos,
        saveTodos,
        loading,
        error,
    };
}

export {useLocalStorage};