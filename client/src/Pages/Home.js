import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import addNoteHere from "../assets/images/addNoteHere.png"
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { NoteDetailsContext } from '../context/notes/NoteDetailsState'
import LoginContext from '../context/user/loginContext';
import { SearchContext } from '../context/notes/search';

function Home() {

    const [noteDetails , setNoteDetails] = useContext(NoteDetailsContext);
    const { islogin } = useContext(LoginContext);
    const [search, setsearch] = useContext(SearchContext);
    const [noteState,setnoteState, updateState, setupdateState ] = useContext(NoteContext);
    const [display, setdisplay] = useState("flex")
    const [searchdisplay, setsearchdisplay] = useState("flex")
    const history = useHistory();
    
    useEffect(() => {     
        console.log("0 "+search);           
        console.log(search);        
        // (search!==null)?setdisplay("hidden"):setdisplay("flex")
        if(search!==null){
            setdisplay("hidden")
            setsearchdisplay("flex")
        }else{
            setdisplay("flex")
            setsearchdisplay("hidden")
            }
    }, [search])

    return (
        <>
            <div className={`${display} m-8 md:mx-44 p-4 flex-row-reverse items-center`}>
                <img src={addNoteHere} className="w-40 h-40" />
                <Link to="/addnote"><button
                    className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 h-12" >
                    Add Note
                </button></Link>
            </div>
            {(islogin) ?
                <>
                    <div className="bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl m-8 md:mx-44 p-4">
                        <div className="flex w-full justify-center align-center mb-4 " >
                            <h2 className="text-3xl my-4 font-semibold "> {!noteState.length? "Add Your First Note 📓"  :"Your Note"} </h2>
                        </div>
                        <div className={`${display} justify-evenly flex-wrap gap-4`}>
                            {
                                noteState.map((note) => {
                                    return (
                                        <div className="bg-white md:w-64 w-full mb-4 relative rounded-lg p-6 cursor-pointer" onClick={() => {
                                            setNoteDetails({...noteDetails,
                                                id: note._id,
                                                title: note.title,
                                                description: note.description,
                                                tag: note.tag,
                                                date: note.date.toString(),
                                            })
                                            history.push("/singlenote")
                                        }}>
                                            <h3 className="text-lg font-bold" >{note.title} </h3>
                                            <p className="text-md text-gray-800 my-6">{note.description.length > 20 ? note.description.slice(0, 50) + " ..." : note.description} </p>

                                            <div className="text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold">{note.tag}</div>
                                            <p className="text-md text-gray-800 ">{note.date}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`${searchdisplay} justify-evenly flex-wrap gap-4`}>
                            {
                                search!==null && search.map((note) => {
                                    return (
                                        <div className="bg-white md:w-1/4 w-full mb-4 relative rounded-lg p-6 cursor-pointer" onClick={() => {
                                            setNoteDetails({...noteDetails,
                                                id: note._id,
                                                title: note.title,
                                                description: note.description,
                                                tag: note.tag,
                                                date: note.date,
                                            })
                                            history.push("/singlenote")
                                        }}>
                                            <h3 className="text-lg font-bold" >{note.title} </h3>
                                            <p className="text-md text-gray-800 my-6">{note.description.length > 20 ? note.description.slice(0, 50) + " ..." : note.description} </p>

                                            <div className="text-md absolute top-0 right-0 rounded-full bg-notebook-400 p-3 text-white font-semibold">{note.tag}</div>
                                            <p className="text-md text-gray-800 ">{note.date}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </> :
                <div className="flex justify-center gap-3 p-4 items-center flex-col bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl mx-6 md:mx-32 h-44" >
                    <h1 className="text-xl text-black text-center " >Cant see your notes? try logging in.</h1>
                    <h1 className="text-xl text-black text-center " >New to this website, why dont you sign up?</h1>
                </div>
            }
        </>
    )
}

export default Home