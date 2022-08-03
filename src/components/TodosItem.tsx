import React from 'react';
import Todo from '../models/todo';
import classes from './TodosItem.module.css';

interface TodoItem {
  item: Todo;
  onRemoveTodo: (id: string) => void;
}

const TodosItem: React.FC<TodoItem> = (props) => {
  const clickHandler = () => {
    props.onRemoveTodo(props.item.id);
  };

  return (
    <li className={classes.item} onClick={clickHandler}>
      {props.item.text}
    </li>
  );
};

export default TodosItem;
