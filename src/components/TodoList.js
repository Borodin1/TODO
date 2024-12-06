import { InfinitySpin } from "react-loader-spinner";
import "../styles/TodoList.css";

import { TodoItem } from "./TodoItem";

import { useTodoList } from "../hooks/useTodoList";
import { TodoPagination } from "./TodoPagination";

export const TodoList = () => {
  const { currentTodos, status, page, handlePageChange, totalPages } =
    useTodoList();
  return (
    <div className="todo-list">
      {status === true && (
        <InfinitySpin width="200" color="rgb(158, 120, 207)" />
      )}
      <ul className="todo-list-item">
        {currentTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
      <div>
        <TodoPagination
          page={page}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
