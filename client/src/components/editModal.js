import { Fragment, useRef, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {editNote} from "../services/api"
import { NoteDetailsContext } from '../context/notes/NoteDetailsState'
import { EditContext } from '../context/user/edit'
import NoteContext from '../context/notes/noteContext'
import { useHistory } from 'react-router'

export default function Example(props) {
    
  const cancelButtonRef = useRef(null)
  const [noteState,setnoteState, updateState, setupdateState] = useContext(NoteContext);
  const [noteDetails , setNoteDetails] = useContext(NoteDetailsContext);
  const [open, setOpen] = useContext(EditContext)
  const [title, settitle] = useState(noteDetails.title)
  const [description, setdescription] = useState(noteDetails.description)
  const [tag, settag] = useState(noteDetails.tag)
  const id = noteDetails.id
  const history = useHistory();

  const handleClickTitle=(e)=>{
    settitle(e.target.value)
  }
  const handleClickDesc=(e)=>{
    setdescription(e.target.value)
  }
  const handleClickTag=(e)=>{
    settag(e.target.value)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Edit Note
                    </Dialog.Title>
                    <div className="mt-2">
                    <input placeholder="title" className="w-full h-12 border border-gray-300 rounded-md text-center my-2" onChange={handleClickTitle} value={title}/>
                    <input placeholder="description" className="w-full h-12 border border-gray-300 rounded-md text-center my-2" onChange={handleClickDesc} value={description}/>
                    <input placeholder="tag" className="w-full h-12 border border-gray-300 rounded-md text-center my-2" onChange={handleClickTag} value={tag}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-notebook-400 text-base font-medium text-white hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    Promise.resolve(editNote({title, description, tag, id})).then((res)=>{
                      setOpen(false)
                      console.log(res);
                      setupdateState(!updateState)
                      setNoteDetails({...noteDetails,
                        title: res.data.note.title,
                        description: res.data.note.description,
                        tag: res.data.note.tag,
                      })
                    })
                  }}>
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
