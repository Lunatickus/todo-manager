import { useEffect, useState } from "react";
import { AddToDoForm } from "./AddToDoForm/AddToDoForm";
import { ToDoList } from "./ToDoList/ToDoList";

const STORAGE_KEY = "toDos";

function App() {
  const [toDos, setToDos] = useState(
    () => JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? []
  );
  console.log(toDos);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  const handleAddToDo = (toDo) => {
    if (toDos.find((item) => item.title === toDo.title)) {
      alert("ToDo already exists");
      return;
    }

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
  };

  const handleEditToDo = (title, changes) => {
    const currentToDoIndex = toDos.findIndex((item) => item.title === title);
    toDos[currentToDoIndex] = { ...toDos[currentToDoIndex], ...changes };
    setToDos([...toDos]);
  };

  const updateToDos = () => {
    setToDos([...toDos]);
  }

  return (
    <main>
      <section>
        <h1>ToDo Manager</h1>
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
    </main>
  );
}

export default App;
