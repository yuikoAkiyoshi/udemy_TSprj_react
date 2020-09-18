import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { stringify } from 'querystring';

import {Todo} from './todo.model';

const App: React.FC = () => {
  // const [todos, setTodos] = useState<{id:string,text:string}[]>([]);
  //↑このように型定義を直接書いてもいいが、再利用したいためmodelファイルに切り分け
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler= (text:string) =>{
    setTodos(prevState => [
      ...prevState,
      {
        id:Math.random().toString(),
        text: text
      }
    ]);
  }

  const todoDeleteHandler = (todoId:string) =>{
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <NewTodo todoAddHandler = {todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
