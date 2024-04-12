import { useState } from "react";
import { EditFormStyled } from "./EditToDoForm.styled";

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
    <EditFormStyled onSubmit={handleSubmit}>
      <label className="form-label">
        <span>ToDo title</span>
        <input
          type="text"
          name="title"
          className="form-input"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="form-label">
        <span>Description</span>
        <textarea
          name="description"
          className="form-input form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <button className="form-submit" type="submit" disabled={isDisabled}>
        Edit ToDo
      </button>
    </EditFormStyled>
  );
};
