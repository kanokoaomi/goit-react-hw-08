import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const responce = await contactsInstance.get("/contacts");
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
      const responce = await contactsInstance.post("/contacts", contactData);
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
      await contactsInstance.delete(`/contacts/${id}`);
      return { id };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
