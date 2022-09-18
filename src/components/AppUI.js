import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodoCounter} from './TodoCounter';
import {TodoForm} from '../TodoForm';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateButton} from './CreateButton';
import {Modal} from '../modal/'
function AppUI(){
    const {error,loading,searchedTodos,completeTodo,deleteTodo, openModal, setOpenModal}= React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter  />
            <TodoSearch />
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
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
            <CreateButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI }