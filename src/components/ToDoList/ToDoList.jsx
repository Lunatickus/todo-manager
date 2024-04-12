import { ToDoListItem } from "../ToDoListItem/ToDoListItem";
import { ToDoListStyled } from "./ToDoList.styled";

export const ToDoList = ({
  toDos,
  changeToDoStatus,
  removeToDo,
  editToDo,
  updateToDos,
  completed,
}) => {
  return (
    <ToDoListStyled>
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
    </ToDoListStyled>
  );
};
