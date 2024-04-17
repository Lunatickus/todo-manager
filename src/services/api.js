import axios from "axios";
import { toastError } from "./toastNotifications";

axios.defaults.baseURL = "http://localhost:3000";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = async (user) => {
  try {
    const { data } = await axios.post("/auth/register", user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    toastError("User already exist");
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post("/auth/login", user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    toastError("User already exist");
    console.log(error);
  }
};

export const refresh = async (user) => {
  if (!user) return null;
  try {
    setAuthHeader(user.token);
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
    clearAuthHeader();
  } catch (error) {
    console.log(error);
  }
};

export const fetchToDos = async () => {
  try {
    const { data } = await axios.get("/to-dos/parents");
    return data;
  } catch (error) {
    console.log(error);
  }
};
