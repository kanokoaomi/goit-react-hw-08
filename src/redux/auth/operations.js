import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.get("/users/singup", formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
