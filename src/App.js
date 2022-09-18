import React from 'react';
import './styles/style.css';
import { TodoContext, TodoProvider } from './TodoContext';
import { AppUI } from './components/AppUI'; 

function App() {
  return (
    <TodoProvider>
      < AppUI />
    </TodoProvider>
  );
}

export default App;
