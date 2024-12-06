import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=100"
  );
  const data = await response.json();

  return data.map((todo) => ({ ...todo, isEditing: false }));
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    status: false,
    isError: false,
    page: 1,
  },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.list.unshift(newTodo);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.isEditing = false;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
    },
    changeIsEditing: (state, action) => {
      const { id, isEditing } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        todo.isEditing = isEditing;
      }
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = true;
        state.isError = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = false;
        state.isError = false;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = false;
        state.isError = true;
      });
  },
});

export const { createTodo, updateTodo, deleteTodo, changeIsEditing, setPage } =
  todosSlice.actions;
export default todosSlice.reducer;
