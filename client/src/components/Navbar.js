import React, { useContext, Fragment, useState } from 'react'
import { AiOutlineSearch, AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import user from "../assets/images/userLogo.png"
import LoginContext from '../context/user/loginContext';
import { Menu, Transition } from '@headlessui/react'
import { useHistory } from 'react-router';
import { searchNote, searchTag } from '../services/api';
import { SearchContext } from '../context/notes/search';
import Alert from "./Alert"

const handleTagSearch=(e)=>{
    Promise.resolve(searchTag(e.target.value)).then((res)=>{
        console.log(res);
    })
}

const SearchBar = () => {
    const [search, setsearch] = useContext(SearchContext)
    const [hide, sethide] = useState("hidden");
    const [error, seterror] = useState("");
    return (
        <>
            <div className={`${hide}`}>
                <Alert message={error} />
            </div>
            <div className="flex bg-white items-center mx-8 gap-3 shadow-md px-8">
                <div className="flex items-center w-1/2 md:w-max gap-3" onChange={(e)=>{
                    Promise.resolve(searchNote(e.target.value)).then((res)=>{
                        sethide("hidden")
                        setsearch(res.data.notes)
                    }).catch((error)=>{
                        if({error}.error.response.data.e==="no note found"){
                            setsearch(null)
                            seterror(`No note found for ${e.target.value}`)
                            sethide("flex")
                        }
                    })
                }}>
                    <AiOutlineSearch className="text-zomato-500" />
                    <input type="text" placeholder="Search By Note Or By Tag" name="location" id="location" className="py-2 w-max rounded-md text-md" />
                </div>
                
            </div>
        </>
    )
}

const Logo = () => {
    return (
        <div className="w-44 h-36">
            <Link to="/">
                <img className="w-full h-full" src={logo} alt="logo" />
            </Link>
        </div>
    )
}


const ProfileDisclosure = () => {

    const history = useHistory();

    const { gPhoto, setGPhoto, islogin, setlogin } = useContext(LoginContext);
    setGPhoto(localStorage.getItem("googlePhoto"))
    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    {(gPhoto)?<img
                        className="h-12 w-12 rounded-full"
                        src={gPhoto}
                        alt="profile pic"
                    />: <img
                    className="h-12 w-12 rounded-full"
                    src={user}
                    alt="profile pic"
                />}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to="/about"
                                className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                Your Profile
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token")
                                    localStorage.removeItem("googlePhoto")
                                    setlogin(false)
                                    setGPhoto(null)
                                    history.push("/")
                                }}
                                className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                Sign out
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

const LoginDisclosure = () => {

    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="bg-red-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1">
                    <span className="sr-only">Open user menu</span>
                    {
                        <AiOutlineLogin className="w-6 h-6 text-white" />
                    }
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to="/login"
                                className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                Log in
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to="/signup"
                                className={(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                Sign up
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}


const MobileNav = () => {

    const { islogin } = useContext(LoginContext);
    return (
        <div className=" md:hidden ">
            <div className="p-4 flex items-center justify-between w-full ">
                <Logo />
                <div className="flex items-center px-8 cursor-pointer" >
                    {(islogin) && <div>
                        <ProfileDisclosure />
                    </div>}
                    {(!islogin) && <span className="text-red-500 ">
                        <LoginDisclosure/>
                    </span>}
                </div>
            </div>
            <SearchBar />
        </div>
    )

}
const LgNav = () => {

    const { islogin } = useContext(LoginContext);
    return (
        <div className="flex items-center justify-center w-full text-gray-400 hidden md:flex ">
            <div className="flex w-4/5 justify-evenly items-center">
                <Logo />
                <SearchBar />
                {(islogin) && <div>
                    <ProfileDisclosure />
                </div>}
                {(!islogin) && <div className="flex gap-5 cursor-pointer" >
                    <Link to="/login">
                        Log In
                    </Link>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </div>}
            </div>
        </div>
    )

}

function Navbar() {
    return (
        <>
            <nav >
                <MobileNav />
                <LgNav />
                <hr className="mx-5 md:mx-44"/>
            </nav>
        </>
    )
}

export default Navbar