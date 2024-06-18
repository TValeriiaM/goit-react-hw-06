import { createSlice } from "@reduxjs/toolkit";
import contactsArr from "../../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: contactsArr },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      const indexOfContact = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(indexOfContact, 1);
    },
  },
});

export default contactsSlice.reducer;

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const { addContact, deleteContact } = contactsSlice.actions;
