import "../styles/TodoList.css";

import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <div className="todo-list">
      <h2>Tasks to do - 4</h2>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};
