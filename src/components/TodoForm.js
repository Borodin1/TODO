import { useTodoForm } from "../hooks/useTodoForm";
import "../styles/TodoForm.css";

export const TodoForm = () => {
  const { title, setTitle, handleSubmit } = useTodoForm();

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>+</button>
    </form>
  );
};
