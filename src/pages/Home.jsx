import AddIcon from "@mui/icons-material/Add";
import NotesCard from "../components/NotesCard";
import { useNotes } from "../context/NotesContext";
const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();
  function onTitleChange(e) {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  }
  function onTextChange(e) {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  }

  function handleClick() {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  }
  console.log("all notes", notes);
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  console.log("real pinned notes", pinnedNotes);

  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
  return (
    <>
      <div className="mt-4">
        <div className="flex flex-col border w-[400px] border-red-800 gap-3 relative p-2 h-[150px] rounded-md">
          <input
            value={title}
            placeholder="Enter title..."
            className="border-neutral-800 rounded-t-md focus:outline-0"
            onChange={onTitleChange}
          />
          <div className="h-[2px] w-full bg-gray-300"></div>
          <textarea
            value={text}
            placeholder="Enter Text"
            className="border-neutral-800 rounded-b-md focus:outline-0 h-[150px]"
            onChange={onTextChange}
          />
          <button
            disabled={title.length === 0}
            className="absolute bottom-0 right-0 border-bg-indigo-800"
            onClick={handleClick}
          >
            <AddIcon />
          </button>
        </div>
        <div className="flex flex-wrap flex-col gap-4 ">
          {pinnedNotes?.length > 0 && (
            <div>
              <h3 className="mt-14">Pinned Notes</h3>
              {pinnedNotes.map(({ id, title, text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap flex-col gap-4">
          {otherNotes?.length > 0 && (
            <div>
              <h3 className="mt-14">Other notes</h3>
              {otherNotes.map(({ id, title, text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
