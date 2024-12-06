import "../styles/TodoItem.css";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useTodoItem } from "../hooks/useTodoItem";

export const TodoItem = ({ todo }) => {
  const { title, setTitle, onClickChange, handleSaveTodo, handleDeleteTodo } =
    useTodoItem(todo);
  return (
    <li className="todo-item">
      {todo?.isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveTodo(todo.id, title);
          }}
          className="todo-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      ) : (
        <p>{todo?.title}</p>
      )}
      <div className="todo-item-button">
        <MdEdit onClick={() => onClickChange(todo.id)} />
        <MdDelete onClick={() => handleDeleteTodo(todo.id)} />
      </div>
    </li>
  );
};
