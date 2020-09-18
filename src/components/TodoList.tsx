import React from 'react';

interface TodoListProps {
    items: {id:string; text:string}[];
    onDeleteTodo: (id:string) => void;
}

const TodoList:React.FC<TodoListProps> = (props) => {
    return(
        <ul>
        {props.items.map(todo => (
            <li key={todo.id}>
                {todo.text}
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
            </li>
        ))}
        </ul>
    )
}

export default TodoList