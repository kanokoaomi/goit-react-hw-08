import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsPhone = (state) => state.contacts.items.phone;
export const selectContactsIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return (
        contact.name?.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contact.number?.replace(/[^\d]/g, "").includes(filter.trim())
      );
    });
  }
);
