import { useState } from "react";
import { AddFormStyled } from "./AddToDoForm.styled";

export const AddToDoForm = ({ addToDo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" && description.trim() === "") {
      return;
    }

    addToDo({ title, description, isDone: false, subToDos: [] });
    setTitle("");
    setDescription("");
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
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
          className="form-textarea form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <button type="submit" className="form-submit">Add ToDo</button>
    </AddFormStyled>
  );
};
