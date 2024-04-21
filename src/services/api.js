import axios from "axios";
import { toastError } from "./toastNotifications";

axios.defaults.baseURL = "http://localhost:3000";

export const signUp = async (user) => {
  try {
    const { data } = await axios.post("/auth/register", user);

    return data;
  } catch (error) {
    toastError("User already exist");
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post("/auth/login", user);

    return data;
  } catch (error) {
    toastError("User already exist");
    console.log(error);
  }
};

export const refresh = async () => {
  try {
    const { data } = await axios.get("/auth/current");
    return data;
  } catch (error) {
    toastError("User already exist");
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await axios.post("/auth/logout");
  } catch (error) {
    console.log(error);
  }
};

export const fetchToDos = async () => {
  try {
    const { data } = await axios.get("/to-dos");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToDo = async (toDo) => {
  try {
    const { data } = await axios.post("/to-dos", toDo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteToDo = async (id) => {
  try {
    await axios.delete(`/to-dos/${id}`);
  } catch (error) {
    console.log(error);
  }
};
