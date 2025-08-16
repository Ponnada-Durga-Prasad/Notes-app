import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";
const NotesContext = createContext();

function NotesProvider({ children }) {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archivedNotes: [],
    importantNotes: [],
    bin: [],
  };
  const [
    { title, text, notes, archivedNotes, importantNotes, bin },
    notesDispatch,
  ] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider
      value={{
        title,
        text,
        notes,
        notesDispatch,
        archivedNotes,
        importantNotes,
        bin,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

// consumer
const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
