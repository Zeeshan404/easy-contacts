import { create } from 'zustand';

const useContactStore = create(set => ({
    contacts: [],
    saveContacts: () => set((data) => ({ contacts: contacts })),
}));

export default useContactStore

