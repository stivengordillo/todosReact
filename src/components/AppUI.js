import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateButton} from './CreateButton';
/*const defaulTodos = [
    { text: 'cortar cebolla', completed:false},
    { text: 'cortar piña', completed:false},
    { text: 'cortar tomate', completed:false},
    { text: 'cortar la luz', completed:false},
]*/

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

function AppUI(){
    const {
        todos,
        saveTodos,
        loading,
        error,

    } = useLocalStorage('TODOS_V1', []);
    const [search, setSearch] = React.useState('');
    const completedTodos =  todos.filter(todo => !!todo.completed ).length;
    const totalTodos = todos.length;
    let searchedTodos=[];
    if(!search.length >=1){
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = search.toLowerCase();
          return todoText.includes(searchText);
        }
      )
    }

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
    }

    React.useEffect(() =>{
        console.log('use effect');
    }, [totalTodos]);
    return (
        <React.Fragment>
            <TodoCounter 
                total={totalTodos}
                completed = {completedTodos}
            
            />
            <TodoSearch 
                search = {search}
                setSearch = {setSearch}
            />
            <TodoList>
                {error && <p>chet</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && searchedTodos.length) && <p>Todo esta OK :)</p> }
                {
                    searchedTodos.map(todo =>(
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete = { () => completeTodo(todo.text)}
                            onDelete = { () => deleteTodo(todo.text)}
                        />
                    ))
                }
            </TodoList>
            <CreateButton />
        </React.Fragment>
    );
}

export { AppUI }