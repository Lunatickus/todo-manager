import { useState } from "react";

export const EditToDoForm = ({
  toDoTitle,
  toDoDescription,
  editToDo,
  closeModal,
}) => {
  const [title, setTitle] = useState(toDoTitle || "");
  const [description, setDescription] = useState(toDoDescription || "");
  const isDisabled = title === toDoTitle && description === toDoDescription;

  const handleSubmit = (e) => {
    e.preventDefault();
    editToDo(toDoTitle, { title, description });
    closeModal();
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>ToDo title</span>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <button type="submit" disabled={isDisabled} >Edit ToDo</button>
    </form>
  );
};
