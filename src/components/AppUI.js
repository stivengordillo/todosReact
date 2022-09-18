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
function AppUI(){
    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTodos;
    if(!localStorageTodos){
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parsedTodos = [];
    }else{
        parsedTodos = JSON.parse(localStorageTodos);
    }
    const [todos, setTodos] = React.useState(parsedTodos);
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
  
    const saveTodos = (newTodos) =>{
        const stringifierTodos = JSON.stringify(newTodos);
        localStorage.setItem('TODOS_V1', stringifierTodos);
        setTodos(newTodos);
    };

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