import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../lib/redux/todosSlice";

export const useTodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(title));

    setTitle("");
  };

  return { title, setTitle, handleSubmit };
};
