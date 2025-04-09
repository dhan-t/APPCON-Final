import { create } from "zustand";

export const useUserData = create((set) => ({
  userData: {
    username: "Jonel Villaver",
    password: "testing123",
    email: "jonelvillaver123@gmail.com",
    userID: 313809184234229,
  },
  applyChanges: (changes) =>
    set((state) => {
      console.log("Submitted");
      return { ...state, userData: { ...state.userData, ...changes } };
    }),
}));

export const useContactStore = create((set) => ({
  contacts: [
    {
      name: "Contact",
      isFav: true,
      type: "contact",
      isAssignedContact: false,
      userId: 1,
    },
    {
      name: "Hotline",
      isFav: true,
      type: "hotline",
      isAssignedContact: false,
      userId: 2,
    },
    {
      name: "Emily Jones",
      isFav: false,
      type: "contact",
      isAssignedContact: true,
      userId: 3827340927430978,
    },
  ],
  addNewContact: (newContact) =>
    set((state) => ({ contacts: [...state.contacts, newContact] })),

  toggleFavContact: (userId) =>
    set((state) => {
      const newContacts = state.contacts.map((contact) => {
        if (contact.userId == userId) {
          return { ...contact, isFav: !contact.isFav };
        }

        return contact;
      });

      return { contacts: newContacts };
    }),
}));
