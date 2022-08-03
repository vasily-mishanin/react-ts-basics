import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const subbmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoInputTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      console.log('Empty Todo');
      return;
    }
    todosCtx.addTodo(enteredText);
    todoInputTextRef.current!.value = '';
  };

  return (
    <form className={classes.form} onSubmit={subbmitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' ref={todoInputTextRef}></input>
      <button>Add New Todo</button>
    </form>
  );
};

export default NewTodo;
