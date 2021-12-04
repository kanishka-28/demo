import React, { useContext, useState, useEffect } from 'react'
import { NoteDetailsContext } from '../context/notes/NoteDetailsState'
import { AiOutlineCopy, AiFillEdit, AiFillDelete, } from "react-icons/ai"
import SuccessAlert from '../components/successAlert'
import EditModal from '../components/editModal'
import { deleteNote } from '../services/api'
import NoteContext from '../context/notes/noteContext'
import { useHistory } from 'react-router'
import { EditContext } from '../context/user/edit'

const SingleNote = () => {

    const [noteDetails] = useContext(NoteDetailsContext);
    const [noteState,setnoteState, updateState, setupdateState] = useContext(NoteContext);
    const [color, setColor] = useState("gray-600")
    const [hide, sethide] = useState("hidden");
    const [display, setdisplay] = useState("block");
    const [open, setOpen] = useContext(EditContext)
    const history = useHistory()

    const copy = () => {
        setColor("green-700")
        navigator.clipboard.writeText(noteDetails.description);
        sethide("block")
        setTimeout(() => {
            sethide("hidden")
            console.log("color");
            console.log(color);
            setColor("gray-600")
        }, [1000])
    }

    const HandleEditClick=()=>{
        setOpen(true)
    }
    
    const HandleDeleteClick=()=>{
        Promise.resolve(deleteNote(noteDetails.id)).then((res)=>{
            setupdateState(!updateState)
            history.push("/")
        }).catch((e)=>{})
    }

    return (
        <div>
            <div className={`${hide}`}>
                <SuccessAlert message={"text-copied"} />
            </div>
            <div className={`${display} bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl m-8 md:mx-44 p-4`}>
                <div className="w-full text-center mb-4 " >
                    <h2 className="text-3xl my-4 font-bold ">{noteDetails.title}</h2>
                    <div className="flex justify-center py-4">
                        <button className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2"><AiFillEdit className="w-6 h-8 cursor-pointer" onClick={HandleEditClick}/>
                        </button>
                        <button className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red-600 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2" onClick={HandleDeleteClick}><AiFillDelete className="w-6 h-8 cursor-pointer"/></button>
                        <button className={`text-${color} py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 h-12 mx-2`} onClick={copy}><AiOutlineCopy className="w-6 h-8 cursor-pointer"/></button>
                    </div>
                </div>
                <div className="" >
                    <div className="bg-white w-full mb-4 relative text-center rounded-lg p-6 cursor-pointer" >
                        <div className="text-md text-gray-800 my-6 md:px-44 text-center">{noteDetails.description}</div>
                        <div className="text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold">{noteDetails.tag}</div>
                        <p className="text-md text-gray-800 ">{noteDetails.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNote