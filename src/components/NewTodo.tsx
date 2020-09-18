import React, { useRef } from 'react';

//interfaceでも可
type NewTodoProps = {
    todoAddHandler:(todoText:string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredRef = textInputRef.current!.value;
        props.todoAddHandler(enteredRef);
    };

    return(
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="hoge">内容</label>
                <input type="text" id="hoge" ref={textInputRef} />
            </div>
            <button type="submit">追加</button>
            </form>
    )
}

export default NewTodo