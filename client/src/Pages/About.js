import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/user/loginContext'
import NoteContext from '../context/notes/noteContext';
import {getUser} from "../services/api"
import user from "../assets/images/userLogo.png"

const MobAbout = () => {
    const {gPhoto, setGPhoto, islogin , setlogin} = useContext(LoginContext);
    const [noteState]=useContext(NoteContext);
    const [error, seterror] = useState("");
    const [hide, sethide] = useState("hidden");
    const history = useHistory();
    const [about, setabout] = useState({
        name: "",
        email: "",
        phoneNumber: null,
        date: "",
        count:noteState.length
    })
    // eslint-disable-next-line
    useEffect(() => {
        Promise.resolve(getUser()).then(res => {
            console.log("phle ye ");
            setabout({
                    ...about,
                    name: res.data.name,
                    email: res.data.email,
                    phoneNumber: res.data.phoneNumber,
                    date: res.data.date,   
                })
            }).catch((e) => {
                if (e.response.data.error === "jwt expired") {
                    seterror("Login again");
                }
                sethide("block");
                setTimeout(() => {
                    sethide("hidden");
                    history.push("/login");
                }, 2000);
            })
            
        }, [])
    {console.log(islogin);}
        return (
        <>
                <div className="flex flex-col items-center py-2 gap-10 px-6 md:mx-full border border-gray-300 w-max mx-auto" >
                {(gPhoto)?<img
                        className="h-32 w-32 rounded-full bg-black"
                        src={gPhoto}
                        alt="profile pic"
                    />: <img
                    className="h-32 w-32 rounded-full bg-black"
                    src={user}
                    alt="profile pic"
                />}
                    <h2 className="text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 "><strong>Name : </strong> {about.name}</h2>
                    <h2 className="text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 "><strong>Email : </strong> {about.email}</h2>
                    <h2 className="text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 "><strong>Since : </strong> {about.date.slice(0, 10)}</h2>
                    <h2 className="text-xl self-end md:self-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 "><strong>No. of Notes : </strong> {about.count}</h2>
                    {about.phoneNumber &&
                        <h2 className="text-xl text-center self-start md:self-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-notebook-400 to-yellow-100 mb-2 ">PhoneNumber: {about.phoneNumber}</h2>
                    }
                </div>
        </>
    )
}

function About() {
    
    return (
        <>
            <MobAbout/>
        </>
    )
}

export default About