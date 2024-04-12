import { ToDoListItem } from "../ToDoListItem/ToDoListItem";

export const ToDoList = ({
  toDos,
  changeToDoStatus,
  removeToDo,
  editToDo,
  updateToDos,
  completed,
}) => {
  return (
    <ul>
      {toDos.map((toDo) => {
        if (completed) {
          toDo.isDone = completed;
        }

        return (
          <ToDoListItem
            key={toDo.title}
            item={toDo}
            changeToDoStatus={changeToDoStatus}
            removeToDo={removeToDo}
            editToDo={editToDo}
            updateToDos={updateToDos}
          />
        );
      })}
    </ul>
  );
};
