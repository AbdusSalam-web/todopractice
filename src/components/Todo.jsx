import React, { useState } from "react";
import "./Todo.css";
import TodoDate from "./TodoDate";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todo = () => {
  const [task, setTask] = useState([]);
  const [eidtTask, setEditTask] = useState("");
  const handleFormSubmit = (inputValue) => {
    const formattedInput = inputValue.trim().toLowerCase();
    if (!formattedInput) return;
    if (
      !eidtTask &&
      task.some((currentElements) => currentElements.content === formattedInput)
    ) {
      alert("Task already exists");
      return;
    }
    if (eidtTask) {
      const updatedTask = task.map((currentElements) =>
        currentElements.content === eidtTask.content
          ? { ...currentElements, content: formattedInput }
          : currentElements
      );
      setTask(updatedTask);
      setEditTask("");
    } else {
      const newTask = {
        id: Date.now(),
        content: formattedInput,
        isChecked: false,
      };
      setTask((prev) => [...prev, newTask]);
    }
  };
  const handleDelete = (selectedID) => {
    const updatedTask = task.filter(
      (currentElements) => currentElements.id !== selectedID
    );
    setTask(updatedTask);
  };
  const handleToggleCheck = (selectedID) => {
    const updatedTask = task.map((currentElements) =>
      currentElements.id === selectedID
        ? { ...currentElements, isChecked: !currentElements.isChecked }
        : currentElements
    );
    setTask(updatedTask);
  };
  const handleClearAllTask = () => {
    setTask([]);
  };

  const handleEdit = (selectedID) => {
    const taskToEdit = task.find(
      (currentElements) => currentElements.id === selectedID
    );
    setEditTask(taskToEdit);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} eidtTask={eidtTask} />
        <TodoList
          task={task}
          handleDelete={handleDelete}
          handleToggleCheck={handleToggleCheck}
          handleEdit={handleEdit}
        />
        <section>
          <button className="clear_btn" onClick={handleClearAllTask}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
