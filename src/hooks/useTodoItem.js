import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeIsEditing,
  deleteTodo,
  updateTodo,
} from "../lib/redux/todosSlice";

export const useTodoItem = (todo) => {
  const [title, setTitle] = useState(todo?.title);
  const dispatch = useDispatch();

  const onClickChange = (id) => {
    dispatch(changeIsEditing({ id: id, isEditing: true }));
  };

  const handleSaveTodo = (id, title) => {
    dispatch(updateTodo({ id, title }));
  };
  const handleInputChange = (e) => {
    handleSaveTodo(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return {
    title,
    setTitle,
    handleInputChange,
    onClickChange,
    handleSaveTodo,
    handleDeleteTodo,
  };
};
