import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import LoginGoogle from '../components/googleLogin'
import { loginApi } from '../services/api'
import Alert from '../components/Alert';
import LoginContext from '../context/user/loginContext';
import userLogo from "../assets/images/userLogo.png"

const Login = () => {

    const history = useHistory();
    const [bgColor, setBgColor] = useState("gray-400")
    const [cursor, setCursor] = useState("not-allowed")
    const [password, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [hide, sethide] = useState("hidden");
    const [error, seterror] = useState("");
    const { setGPhoto, setlogin } = useContext(LoginContext);

    const passHandle = (e) => {
        setPass(e.target.value)
    }
    const emailHandle = (e) => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        if (password.length > 4 && email.length > 10 && email.includes("@")) {
            setBgColor("notebook-400")
            setCursor("pointer")
        } else {
            setBgColor("gray-400")
            setCursor("not-allowed")
        }
    }, [password, email])

    const loginUserHandle = (e) => {
        e.preventDefault()
        Promise.resolve(loginApi({ password, email })).then(res => {
            localStorage.setItem("token", res.data.jwtToken);
            setGPhoto("userLogo")
            setlogin(true)
            history.push("/");
        }).catch((e) => {
            let validationError
            if(Array.isArray(e.response.data.errors)){
                validationError = e.response.data.errors[0].msg
            }else{
                validationError = e.response.data.error
            }
            seterror(validationError);
            sethide("block");
            setTimeout(() => {
                sethide("hidden");
                if (e.response.status !== 500) {
                    history.push("/signup")
                }
            }, 2000);
        })
    }

    return (
        <>
            <div className={`${hide}`}>
                <Alert message={error} />
            </div>
            <div className="flex justify-center text-center items-center h-max w-full">
                <div className="border border-gray-300 rounded-md bg-gradient-to-br from-pink-400 to-yellow-100">
                    <h2 className="text-2xl font-semibold my-3">Login</h2>
                    <form className="my-3">
                        <input type="text" placeholder="email" className="border border-gray-300 rounded-md text-center m-2 p-2 w-4/5" onChange={emailHandle} value={email} />
                        <input type="password" placeholder="password" className="border border-gray-300 rounded-md text-center m-2 p-2 w-4/5" onChange={passHandle} value={password} />
                    </form>
                    <form>
                        <button className={`text-white bg-${bgColor} rounded-md p-2 px-6 mb-3" cursor-${cursor}`} onClick={loginUserHandle}>Login</button>
                    </form>
                    <hr className="mx-8 my-3" />
                    <p className="text-xl text-gray-500 my-3">Or</p>
                    <div>
                        <LoginGoogle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
