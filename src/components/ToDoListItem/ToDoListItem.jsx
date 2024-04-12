import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { EditToDoForm } from "../EditToDoForm/EditToDoForm";
import { AddToDoForm } from "../AddToDoForm/AddToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";

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
      alert("ToDo already exists");
      return;
    }

    subToDos.push(toDo);
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
  };

  const handleEditToDo = (title, changes) => {
    const currentToDoIndex = subToDos.findIndex((item) => item.title === title);
    subToDos[currentToDoIndex] = { ...subToDos[currentToDoIndex], ...changes };
    updateToDos();
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>Done</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => changeToDoStatus(title)}
      />
      {description && <p>{description}</p>}
      <button type="button" onClick={() => setIsEditModalOpen(true)}>
        Edit ToDo
      </button>
      <button type="button" onClick={() => removeToDo(title)}>
        Delete ToDo
      </button>
      <button type="button" onClick={() => setIsAddModalOpen(true)}>
        Add SubToDo
      </button>
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
          <AddToDoForm
            addToDo={handleAddToDo}
          />
        </Modal>
      )}
    </li>
  );
};
