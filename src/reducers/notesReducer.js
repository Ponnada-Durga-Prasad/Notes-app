import { v4 as uuid } from "uuid";
export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { id: uuid(), text: state.text, title: state.title, isPinned: false },
        ],
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "ADD_TO_ARCHIVE": {
      const archiveNote = state.notes.find((note) => note.id === payload.id);

      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        archivedNotes: [...state.archivedNotes, archiveNote],
      };
    }
    case "UN_ARCHIVE": {
      const reqNote = state.archivedNotes.find(
        (note) => note.id === payload.id
      );
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          (note) => note.id !== payload.id
        ),
        notes: [...state.notes, reqNote],
      };
    }
    case "DELETE_ARCHIVE": {
      const delNote = state.archivedNotes.find(
        (note) => note.id === payload.id
      );
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          (note) => note.id !== payload.id
        ),
        bin: [...state.bin, delNote],
      };
    }

    case "DELETE_PERMANENTLY":
      return {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload.id),
      };
    case "RESTORE_TASK": {
      const restoredTask = state.bin.find((note) => note.id === payload.id);
      return {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload.id),
        notes: [...state.notes, restoredTask],
      };
    }

    case "DELETE_NOTE": {
      const reqNote = state.notes.find((note) => note.id === payload.id);
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        bin: [...state.bin, reqNote],
      };
    }

    // important tab cases

    case "ADD_IMP_NOTE":
      return {
        ...state,
        importantNotes: [
          ...state.importantNotes,
          { id: uuid(), title: payload.title, text: payload.text },
        ],
      };
    case "DELETE_IMP_NOTE":
      return {
        ...state,
        importantNotes: state.importantNotes.filter(
          (note) => note.id !== payload.id
        ),
      };
    case "ADD_TO_NOTES": {
      const reqNote = state.importantNotes.find(
        (note) => note.id === payload.id
      );
      return {
        ...state,
        notes: [...state.notes, reqNote],
        importantNotes: state.importantNotes.filter(
          (note) => note.id !== payload.id
        ),
      };
    }

    default:
      return state;
  }
};
