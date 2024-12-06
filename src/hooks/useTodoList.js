import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, fetchTodos } from "../lib/redux/todosSlice";

export const useTodoList = () => {
  const dispatch = useDispatch();

  const { list, status, error, page } = useSelector((state) => state.todos);

  const currentTodos = list.slice((page - 1) * 4, page * 4);

  const totalPages = Math.ceil(list.length / 4);

  const handlePageChange = (event, newPage) => {
    dispatch(setPage(newPage));
  };

  useEffect(() => {
    if (!list.length) {
      dispatch(fetchTodos());
    }
  }, [dispatch, list.length]);

  return {
    currentTodos,
    status,
    error,
    page,
    handlePageChange,
    totalPages,
  };
};
