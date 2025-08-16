import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNotes } from "../context/NotesContext";
const Bin = () => {
  const { bin, notesDispatch } = useNotes();
  const deleteTaskPermanently = (id) => {
    notesDispatch({
      type: "DELETE_PERMANENTLY",
      payload: { id },
    });
  };
  const restoreTask = (id) => {
    notesDispatch({
      type: "RESTORE_TASK",
      payload: { id },
    });
  };
  console.log(bin);
  return (
    <>
      {bin?.length > 0 ? (
        <div>
          <div className="flex flex-col">
            <h3>Archived Notes</h3>
            {bin.map(({ id, title, text }) => {
              return (
                <div
                  className="w-56 h-28 border border-neutral-800 p-2 rounded-sm m-4 flex flex-col gap-3"
                  key={id}
                >
                  <div>
                    <p>
                      <strong>Title:</strong> {title}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>
                      <strong>Text:</strong> {text}
                    </p>
                    <div className="ml-auto">
                      <button
                        onClick={() => restoreTask(id)}
                        title="restore this note"
                      >
                        <RestoreIcon />
                      </button>
                      <button
                        onClick={() => deleteTaskPermanently(id)}
                        title="Delete this note permanently"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h3>No items in the bin</h3>
        </div>
      )}
    </>
  );
};

export default Bin;

{
  /* ; */
}
