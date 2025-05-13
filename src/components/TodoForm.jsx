import React, { useEffect, useState } from "react";

const TodoForm = ({ onAddTodo, eidtTask }) => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(input);
    setInput("");
  };
  useEffect(() => {
    if (eidtTask) setInput(eidtTask.content);
  }, [eidtTask]);

  return (
    <>
      <section className="form">
        <form action="" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo_btn">
              {eidtTask ? "Update" : "Add Task"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
