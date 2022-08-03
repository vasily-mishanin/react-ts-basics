import React, { PropsWithChildren, useState } from 'react';
import Todo from '../models/todo';

interface ITodosContext extends PropsWithChildren {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<ITodosContext>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todosData, setTodosData] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodosData((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (id: string) => {
    setTodosData((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const contextValue: ITodosContext = {
    items: todosData,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>;
};

export default TodosContextProvider;
