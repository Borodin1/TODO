import "../styles/TodoDone.css";

import { TodoItem } from "./TodoItem";

export const TodoDone = () => {
  return (
    <div className="todo-done">
      <h2>Done - 1</h2>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};
