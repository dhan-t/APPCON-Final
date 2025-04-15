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
      name: "Maria Santos",
      isFav: true,
      type: "friend",
      isAssignedContact: false,
      userId: 10001,
    },
    {
      name: "Jose Reyes",
      isFav: false,
      type: "police",
      isAssignedContact: false,
      userId: 10002,
    },
    {
      name: "Luz Cruz",
      isFav: true,
      type: "hospital",
      isAssignedContact: false,
      userId: 10003,
    },
    {
      name: "Pedro Bautista",
      isFav: false,
      type: "barangay rescue",
      isAssignedContact: false,
      userId: 10004,
    },
    {
      name: "Elena Torres",
      isFav: true,
      type: "emergency contact",
      isAssignedContact: true,
      userId: 10005,
    },
    {
      name: "Ricardo Flores",
      isFav: false,
      type: "friend",
      isAssignedContact: false,
      userId: 10006,
    },
    {
      name: "Carmen Aquino",
      isFav: true,
      type: "police",
      isAssignedContact: false,
      userId: 10007,
    },
    {
      name: "Andres Garcia",
      isFav: false,
      type: "hospital",
      isAssignedContact: false,
      userId: 10008,
    },
    {
      name: "Sofia Mendoza",
      isFav: true,
      type: "barangay rescue",
      isAssignedContact: false,
      userId: 10009,
    },
    {
      name: "Manuel de Guzman",
      isFav: false,
      type: "emergency contact",
      isAssignedContact: true,
      userId: 10010,
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
