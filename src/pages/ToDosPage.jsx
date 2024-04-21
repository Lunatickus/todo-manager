import { toastError, toastSuccess } from "../services/toastNotifications";
import { MainStyled } from "../components/GlobalStyles";
import { AddToDoForm } from "../components/AddToDoForm/AddToDoForm";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { addToDo, deleteToDo } from "../services/api";

const ToDosPage = () => {
  // useEffect(() => {
  //   const getToDos = async () => {
  //     const resp = await fetchToDos();
  //     console.log(resp);
  //     setToDos(resp);
  //   };
  //   getToDos();
  // }, []);

  // const handleAddToDo = async (toDo) => {
  //   if (todos.find((item) => item.title === toDo.title)) {
  //     toastError("ToDo already exists!");
  //     return;
  //   }

  //   toastSuccess(`${toDo.title} toDo successfully added!`);
  //   await addToDo(toDo);
  //   setToDos((prevState) => [...prevState, resp]);
  // };

  // const handleChangeToDoStatus = (title) => {
  //   const currentToDo = toDos.find((item) => item.title === title);
  //   currentToDo.isDone = !currentToDo.isDone;
  //   setToDos([...toDos]);
  // };

  // const handleDeleteToDo = async (id) => {
  //   const filteredToDos = toDos.filter((item) => item.id !== id);
  //   await deleteToDo(id);
  //   setToDos([...filteredToDos]);
  //   toastSuccess(`ToDo was deleted`);
  // };

  // const handleEditToDo = (title, changes) => {
  //   const currentToDoIndex = toDos.findIndex((item) => item.title === title);
  //   toDos[currentToDoIndex] = { ...toDos[currentToDoIndex], ...changes };
  //   setToDos([...toDos]);
  //   toastSuccess(`${title} toDo was edited`);
  // };

  // const updateToDos = () => {
  //   setToDos([...toDos]);
  // };

  return (
    <MainStyled>
      <section className="section">
        <h1 className="section-title">ToDo Manager</h1>
        {/* <AddToDoForm addToDo={handleAddToDo} />
        {isPending && <h1>Loading...</h1>}
        {todos.length !== 0 && (
          <ToDoList
            toDos={todos}
            // changeToDoStatus={handleChangeToDoStatus}
            removeToDo={handleDeleteToDo}
            // editToDo={handleEditToDo}
            // updateToDos={updateToDos}
          />
        )} */}
      </section>
    </MainStyled>
  );
};

export default ToDosPage;
