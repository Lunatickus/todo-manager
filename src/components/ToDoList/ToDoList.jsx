import { ToDoListItem } from "../ToDoListItem/ToDoListItem";
import { ToDoListStyled } from "./ToDoList.styled";

export const ToDoList = ({
  toDos,
  changeToDoStatus,
  removeToDo,
  editToDo,
  updateToDos,
}) => {
  return (
    <ToDoListStyled>
      {toDos.map((toDo) => {
        return (
          <ToDoListItem
            key={toDo.id}
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
