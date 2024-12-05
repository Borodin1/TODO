import "./App.css";
import { TodoDone } from "./components/TodoDone";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <TodoDone />
    </div>
  );
}

export default App;
