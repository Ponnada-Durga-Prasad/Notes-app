import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIconOutlinedIcon from "@mui/icons-material/DeleteOutline";
const Important = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { importantNotes, notesDispatch } = useNotes();
  const handleClick = () => {
    if (!title || !text) {
      setTimeout(() => {
        alert("Please enter the title and text to notes");
      }, 2000);
    } else {
      notesDispatch({
        type: "ADD_IMP_NOTE",
        payload: {
          title,
          text,
        },
      });
    }
  };
  const deleteImpTask = (id) => {
    notesDispatch({
      type: "DELETE_IMP_NOTE",
      payload: { id },
    });
  };

  const handleImportant = (id) => {
    notesDispatch({
      type: "ADD_TO_NOTES",
      payload: { id },
    });
  };
  return (
    <div className="mt-4">
      <div className="flex flex-col border w-[400px] border-red-800 gap-3 relative p-2 h-[150px] rounded-md">
        <input
          value={title}
          placeholder="Enter title..."
          className="border-neutral-800 rounded-t-md focus:outline-0"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="h-[2px] w-full bg-gray-300"></div>
        <textarea
          value={text}
          placeholder="Enter Text"
          className="border-neutral-800 rounded-b-md focus:outline-0 h-[150px]"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          disabled={title.length === 0}
          className="absolute bottom-0 right-0 border-bg-indigo-800"
          onClick={handleClick}
        >
          <AddIcon />
        </button>
      </div>
      <div>
        {importantNotes?.length > 0 &&
          importantNotes.map(({ id, title, text }) => {
            return (
              <div
                className="w-[250px] h-[120px] border border-neutral-800 p-2 rounded-sm m-4 text-sm flex flex-col gap-1"
                key={id}
              >
                <div className="flex justify-between">
                  <p>{title}</p>
                </div>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <div className="flex flex-col gap-4">
                  <p>{text}</p>
                  <div className="flex justify-between mb-2">
                    <button
                      className=" bg-gray-300 border rounded-lg text-sm p-1"
                      onClick={() => handleImportant(id)}
                    >
                      important
                    </button>
                    <button onClick={() => deleteImpTask(id)}>
                      <DeleteIconOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Important;
