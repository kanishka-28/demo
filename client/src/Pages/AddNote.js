import React, { useContext, useState } from 'react'
import SuccessAlert from '../components/successAlert';
import LoginContext from '../context/user/loginContext'
import { addNote } from '../services/api';
import NoteContext from '../context/notes/noteContext';
import { useHistory } from 'react-router';
const AddNote = () => {

    const { islogin } = useContext(LoginContext);
    const history=useHistory();
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [tag, settag] = useState("")
    const [noteState,setnoteState, updateState, setupdateState] = useContext(NoteContext);

    const titleValue = (e) => { settitle(e.target.value) }
    const descValue = (e) => { setdescription(e.target.value) }
    const tagValue = (e) => { settag(e.target.value) }
    const [hide, sethide] = useState("hidden");

    const addNoteHandle = (e) => {
        e.preventDefault()
        Promise.resolve(addNote({ title, description, tag })).then(res => {
        sethide("block")
        settitle("")
        setdescription("")
        settag("")
        setupdateState(!updateState)
        setTimeout(() => {
            sethide("hidden")
            history.push("/");
        }, [1000])
        }).catch((e) => {

        })
    }
    return (
        <>
            <div className={`${hide}`}>
                <SuccessAlert message={"note created"} />
            </div>
            {islogin ?
                <div className="m-8 md:mx-44">
                    <div className="w-full bg-gradient-to-br from-pink-500 to-yellow-200 rounded-xl">
                        {/* code for adding task form */}
                        <h2 className="text-lg font-bold mx-5" >Add a note</h2>
                        <form onSubmit={addNoteHandle}  > {/* call a function here*/}
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-transparent sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="title"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md"
                                                onChange={titleValue}
                                                value={title}
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                name="description"
                                                id="description"
                                                autoComplete="description"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md"
                                                onChange={descValue}
                                                value={description}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="tag" className="block text-lg font-medium text-gray-700">
                                                Tag
                                            </label>
                                            <input
                                                type="text"
                                                name="tag"
                                                id="tag"
                                                autoComplete="address-level2"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md"
                                                onChange={tagValue}
                                                value={tag}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400">
                                        Add Note
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> :
                <div className="flex justify-center gap-3 p-4 items-center flex-col bg-gradient-to-br from-pink-500 to-yellow-100 rounded-xl mx-6 md:mx-32 h-44" >
                    <h1 className="text-xl text-black text-center " >Cant add your notes? try logging in.</h1>
                    <h1 className="text-xl text-black text-center " >New to this website, why dont you sign up?</h1>
                </div>}
        </>
    )
}

export default AddNote