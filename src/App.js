import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

const url = "https://www.genesys.cl/wp-content/uploads/2020/10/Genesys-Logo-Navbar-Black.png";

const defaultTodos = [
  {id: 1, text: 'Cortar 2 cebolla', completed: false},
  {id: 2, text: 'Tomar 1 cebolla', completed: true},
  {id: 3, text: 'Llorar ninguna cebolla', completed: false}
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const competeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
  }

  return (    
  <React.Fragment>
    <TodoCounter 
    total={totalTodos}
    completed = {completedTodos}
    />
    
    <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
    />
    
    <TodoList>
    {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed} />
      ))}
    </TodoList>

    <CreateTodoButton />
    
  </React.Fragment>
    
  );
}

export default App;
