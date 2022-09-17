import React from 'react';
import './styles/style.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateButton} from './components/CreateButton';
const defaulTodos = [
  { text: 'cortar cebolla', completed:false},
  { text: 'cortar piña', completed:false},
  { text: 'cortar tomate', completed:false},
  { text: 'cortar la luz', completed:false},
]
function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
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
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = { () => completeTodo(todo.text)}
            onDelete = { () => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateButton />
    </React.Fragment>
  );
}

export default App;
