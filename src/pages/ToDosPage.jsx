import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../services/toastNotifications";
import { MainStyled } from "../components/GlobalStyles";
import { AddToDoForm } from "../components/AddToDoForm/AddToDoForm";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { STORAGE_KEY } from "../services/constants";
import { fetchToDos } from "../services/api";

const ToDosPage = () => {
  const [toDos, setToDos] = useState(
    () => JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? []
  );

  useEffect(() => {
    const getToDos = async () => {
      const resp = await fetchToDos();
      console.log(resp);
    };
    getToDos();
  }, []);

  const handleAddToDo = (toDo) => {
    if (toDos.find((item) => item.title === toDo.title)) {
      toastError("ToDo already exists!");
      return;
    }

    toastSuccess(`${toDo.title} toDo successfully added!`);
    setToDos((prevState) => [...prevState, toDo]);
  };

  const handleChangeToDoStatus = (title) => {
    const currentToDo = toDos.find((item) => item.title === title);
    currentToDo.isDone = !currentToDo.isDone;
    setToDos([...toDos]);
  };

  const handleDeleteToDo = (title) => {
    const filteredToDos = toDos.filter((item) => item.title !== title);
    setToDos([...filteredToDos]);
    toastSuccess(`${title} toDo was deleted`);
  };

  const handleEditToDo = (title, changes) => {
    const currentToDoIndex = toDos.findIndex((item) => item.title === title);
    toDos[currentToDoIndex] = { ...toDos[currentToDoIndex], ...changes };
    setToDos([...toDos]);
    toastSuccess(`${title} toDo was edited`);
  };

  const updateToDos = () => {
    setToDos([...toDos]);
  };

  return (
    <MainStyled>
      <section className="section">
        <h1 className="section-title">ToDo Manager</h1>
        <AddToDoForm addToDo={handleAddToDo} />
        {toDos.length !== 0 && (
          <ToDoList
            toDos={toDos}
            changeToDoStatus={handleChangeToDoStatus}
            removeToDo={handleDeleteToDo}
            editToDo={handleEditToDo}
            updateToDos={updateToDos}
          />
        )}
      </section>
    </MainStyled>
  );
};

export default ToDosPage;
