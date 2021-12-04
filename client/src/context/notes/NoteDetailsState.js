import { createContext, useState } from "react";

export const NoteDetailsContext = createContext();

const NoteDetailsState = (props) => {

    const [noteDetails, setNoteDetails] = useState({
        id: "",
        title: "",
        description: "",
        tag: "",
        date: "",
    })

    return (
        <div>
            <NoteDetailsContext.Provider value={[noteDetails, setNoteDetails]}> 
                {props.children}
            </NoteDetailsContext.Provider>
        </div>
    )
}

export default NoteDetailsState