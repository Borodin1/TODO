import "../styles/TodoItem.css";

import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const TodoItem = () => {
  return (
    <li className="todo-item">
      <p>To do something</p>
      <div className="todo-item-button">
        <FaCheck />
        <MdEdit />
        <MdDelete />
      </div>
    </li>
  );
};
