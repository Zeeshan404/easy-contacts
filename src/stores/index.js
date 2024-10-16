import { create } from 'zustand'

const useContactsStore = create((set) => ({
    contacts: [],
    saveContacts: (contacts) => set({ contacts })
}))



export default useContactsStore