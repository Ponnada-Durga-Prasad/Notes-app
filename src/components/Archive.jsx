import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useNotes } from "../context/NotesContext";
import DeleteIconOutlinedIcon from "@mui/icons-material/DeleteOutline";

const Archive = () => {
  const { archivedNotes, notesDispatch } = useNotes();
  console.log("archived ntoes", archivedNotes);
  const removeFromArchive = (id) => {
    notesDispatch({
      type: "UN_ARCHIVE",
      payload: { id },
    });
  };
  const deleteTask = (id) => {
    notesDispatch({
      type: "DELETE_ARCHIVE",
      payload: { id },
    });
  };
  console.log("archived notes", archivedNotes);
  return (
    <>
      {archivedNotes?.length > 0 ? (
        archivedNotes.map(({ id, text, title }) => {
          return (
            <div key={id} className="flex flex-col">
              <h3>Archived Notes</h3>
              <div
                className="w-56 h-28 border border-neutral-800 p-2 rounded-sm m-4"
                key={id}
              >
                <div className="flex justify-between">
                  <p>{title}</p>
                </div>
                <div className="flex flex-col">
                  <p>{text}</p>
                  <div className="ml-auto">
                    <button onClick={() => removeFromArchive(id)}>
                      <ArchiveIcon />
                    </button>
                    <button onClick={() => deleteTask(id)}>
                      <DeleteIconOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h3>No Archived Notes.</h3>
        </div>
      )}
    </>
  );
};

export default Archive;
