import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { EditToDoForm } from "../EditToDoForm/EditToDoForm";
import { AddToDoForm } from "../AddToDoForm/AddToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItemStyled } from "./ToDoListItem.styled";
import { toastError, toastSuccess } from "../../services/toastNotifications";

export const ToDoListItem = ({
  item,
  changeToDoStatus,
  removeToDo,
  editToDo,
  updateToDos,
}) => {
  const { title, description, isDone, subToDos } = item;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddToDo = (toDo) => {
    if (subToDos.find((item) => item.title === toDo.title)) {
      toastError("ToDo already exists!");
      return;
    }

    subToDos.push(toDo);
    toastSuccess(`${toDo.title} toDo successfully added!`);
    updateToDos();
    setIsAddModalOpen(false);
  };

  const handleChangeToDoStatus = (title) => {
    const currentToDo = subToDos.find((item) => item.title === title);
    currentToDo.isDone = !currentToDo.isDone;
    updateToDos();
  };

  const handleDeleteToDo = (title) => {
    const currentToDoIndex = subToDos.findIndex((item) => item.title === title);
    subToDos.splice(currentToDoIndex, 1);
    updateToDos();
    toastSuccess(`${title} toDo was deleted`);
  };

  const handleEditToDo = (title, changes) => {
    const currentToDoIndex = subToDos.findIndex((item) => item.title === title);
    subToDos[currentToDoIndex] = { ...subToDos[currentToDoIndex], ...changes };
    updateToDos();
    toastSuccess(`${title} toDo was edited`);
  };

  return (
    <ToDoItemStyled>
      <div className="title-wrapper">
        <h3 className="item-title">{title}</h3>
        <div className="checkbox-wrapper">
          <p className="item-text">Done</p>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => changeToDoStatus(title)}
          />
        </div>
      </div>
      {description && (
        <p className="item-text item-description">{description}</p>
      )}
      <div className="item-btn-wrapper">
        <button
          type="button"
          onClick={() => setIsEditModalOpen(true)}
          className="item-btn"
        >
          Edit ToDo
        </button>
        <button
          type="button"
          onClick={() => removeToDo(title)}
          className="item-btn"
        >
          Delete ToDo
        </button>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="item-btn"
        >
          Add SubToDo
        </button>
      </div>
      {subToDos.length !== 0 && (
        <ToDoList
          toDos={subToDos}
          changeToDoStatus={handleChangeToDoStatus}
          removeToDo={handleDeleteToDo}
          editToDo={handleEditToDo}
          updateToDos={updateToDos}
          completed={isDone}
        />
      )}
      {isEditModalOpen && (
        <Modal closeModal={() => setIsEditModalOpen(false)}>
          <EditToDoForm
            toDoTitle={title}
            toDoDescription={description}
            editToDo={editToDo}
            closeModal={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
      {isAddModalOpen && (
        <Modal closeModal={() => setIsAddModalOpen(false)}>
          <AddToDoForm addToDo={handleAddToDo} />
        </Modal>
      )}
    </ToDoItemStyled>
  );
};
