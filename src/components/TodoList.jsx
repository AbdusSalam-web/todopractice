import React from "react";
import { MdCheck, MdDeleteForever, MdEdit } from "react-icons/md";

const TodoList = ({ task, handleDelete, handleToggleCheck, handleEdit }) => {
  const handleProper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <section className="myUnOrdList">
        <ul>
          {task?.map(({ id, content, isChecked }) => {
            return (
              <li key={id} className="todo_item">
                <span className={isChecked ? "line-through" : ""}>
                  {handleProper(content)}
                </span>
                <button
                  className="check_btn"
                  onClick={() => handleToggleCheck(id)}
                >
                  <MdCheck />
                </button>
                <button className="delete_btn" onClick={() => handleDelete(id)}>
                  <MdDeleteForever />
                </button>
                <button className="edit_btn" onClick={() => handleEdit(id)}>
                  <MdEdit />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
