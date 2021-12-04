import react, {useContext, useState, useEffect} from "react";
import NoteContext from "./noteContext";
import { getNotes } from "../../services/api";
import { useHistory } from "react-router";
import LoginContext from "../user/loginContext";
import { useLocation } from 'react-router-dom';

const NoteState=(props)=>{
   
    const [noteState, setnoteState] = useState([]);
    const [updateState, setupdateState] = useState(true);
    const [error, seterror] = useState("");
    const [hide, sethide] = useState("hidden");
    const {islogin} = useContext(LoginContext);
    const history=useHistory();
    const location = useLocation();

    useEffect(() => {
        Promise.resolve(
            getNotes()
        ).then((res)=>{
            setnoteState(res.data.notes)
        }).catch((e)=>{
            if(e.response.data.error === "jwt malformed") {
                seterror("Login again");
            }
            sethide("block");
            setTimeout(() => {
                sethide("hidden");
            }, 2000);
        })
    }, [islogin, updateState])

    return(
        <NoteContext.Provider value={[noteState,setnoteState, updateState, setupdateState]} >
             {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
