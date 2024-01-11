import { create } from 'zustand';
import { DATA } from './data';

const useContactStore = create(set => ({
    contacts: DATA,
    // saveContacts : ()=> set(()=>({}))
}));

export default useContactStore

