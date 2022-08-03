import React, { useContext } from 'react';
import TodosItem from './TodosItem';
import classes from './TodosList.module.css';
import { TodosContext } from '../store/todos-context';

// interface TodoList extends PropsWithChildren {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// }

const TodosList: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodosItem key={item.id} item={item} onRemoveTodo={todosCtx.removeTodo} />
      ))}
    </ul>
  );
};

export default TodosList;
