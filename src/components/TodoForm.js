import "../styles/TodoForm.css";

export const TodoForm = () => {
  return (
    <form className="todo-form">
      <input type="text" placeholder="Add a new task " />
      <button>+</button>
    </form>
  );
};
