import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import ArchiveIconOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteIconOutlinedIcon from "@mui/icons-material/DeleteOutline";
import { useNotes } from "../context/NotesContext";
const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch } = useNotes();
  const addPin = (id) => {
    //   isPinned ? notesDispatch({
    //     type: "PIN",
    //     payload: id,
    //   }) : notesDispatch({
    //     type: 'UNPIN',
    //     payload: id
    //   })
    notesDispatch({
      type: isPinned ? "UNPIN" : "PIN",
      payload: { id },
    });
  };
  const addToArchive = (id) => {
    notesDispatch({
      type: "ADD_TO_ARCHIVE",
      payload: { id },
    });
  };
  const deleteTask = (id) => {
    notesDispatch({
      type: "DELETE_NOTE",
      payload: { id },
    });
  };
  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-sm m-4" key={id}>
      <div className="flex justify-between">
        <p>{title}</p>
        <button onClick={() => addPin(id)}>
          {isPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
        </button>
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => addToArchive(id)}>
            <ArchiveIconOutlinedIcon />
          </button>
          <button onClick={() => deleteTask(id)}>
            <DeleteIconOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
