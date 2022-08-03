import TodosList from './components/TodosList';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

//const DATA = [new Todo('Setup the apartment'), new Todo('Find Job'), new Todo('Go for a walk')];

function App() {
  return (
    <TodosContextProvider>
      <header>App React-TS</header>
      <NewTodo />
      <TodosList />
    </TodosContextProvider>
  );
}

export default App;
