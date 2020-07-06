import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

//Component to create a note

function CreateArea(props) {

    const [note, setNote] = useState({
        key: 0,
        title: "",
        content: ""
    });

    const [focused, setFocused] = useState(false);

    function expand(){
        setFocused(true);
    }

    function onInputChanged(event){
        const {name, value} = event.target;

        setNote((prevValue) => {
            let note = {
                ...prevValue,
                [name]: value
            }
            return note;
        });
    }

    function submitNote(event){
        props.addNote(note);
        event.preventDefault();
        setNote({
            key: 0,
            title: "",
            content: ""
        });
    }

  return (
    <div>
      <form className="create-note">
        {focused && <input onChange={onInputChanged} name="title" value={note.title} placeholder="Title" />}
        <textarea onClick={expand} onChange={onInputChanged} name="content" placeholder="Take a note..." value={note.content} rows={focused ? 3 : 1} />
        <Zoom in={focused}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;