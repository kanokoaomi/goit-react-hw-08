import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";
// import axios from "axios";

// const contactsInstance = axios.create({
//   baseURL: "https://connections-api.goit.global/",
// });

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const responce = await authInstance.get("/contacts");
      // console.log(responce.data);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkApi) => {
    try {
      console.log(contactData);
      const responce = await authInstance.post("/contacts", contactData);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await authInstance.delete(`/contacts/${id}`);
      return { id };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
