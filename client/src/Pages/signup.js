import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import SignupGoogle from '../components/googleSignup';
import { signupApi } from '../services/api'
import Alert from '../components/Alert';
import LoginContext from '../context/user/loginContext';
import userLogo from "../assets/images/userLogo.png"

const Signup = () => {

    const history = useHistory();
    const [info, setinfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        cnfpassword: "",
    })
    const [hide, sethide] = useState("hidden");
    const [error, seterror] = useState("");
    const [cursor, setcursor] = useState("not-allowed")
    const { setGPhoto, setlogin } = useContext(LoginContext);

    const nameHandle = (e) => { setinfo({ ...info, name: e.target.value }) }
    const emailHandle = (e) => { setinfo({ ...info, email: e.target.value }) }
    const phoneHandle = (e) => { setinfo({ ...info, phoneNumber: e.target.value }) }
    const passHandle = (e) => { setinfo({ ...info, password: e.target.value }) }
    const cnfPassHandle = (e) => { setinfo({ ...info, cnfpassword: e.target.value }) }

    useEffect(() => {
        if (info.password === info.cnfpassword && info.password !== "") {
            setcursor("pointer")
        }
        else {
            setcursor("not-allowed")
            seterror("Confirm Password does not match")
        }

    }, [info.password, info.cnfpassword])

    const addUserHandle = (e) => {
        if (info.name === "" || info.email === "") {
            return
        }
        e.preventDefault()
        Promise.resolve(signupApi(info)).then(res => {
            localStorage.setItem("token", res.data.jwtToken);
            history.push("/");
            setlogin(true)
            setGPhoto(userLogo)
        }).catch((e) => {
            seterror(e.response.data.error);
            sethide("block");
            setTimeout(() => {
                sethide("hidden");
            }, 4000);
        })
    }

    return (
        <>
            <div className={`${hide}`}>
                <Alert message={error} />
            </div>
            <div className="w-full mx-auto md:w-2/3 lg:w-1/3 bg-gradient-to-br from-pink-400 to-yellow-100 rounded-xl p-4" >
                <h2 className="text-lg font-bold mx-5 text-center" >New User? Sign up to start creating free notes, accessible from anywhere anytime.</h2>
                <form onSubmit={addUserHandle}  > {/* call a function here*/}
                    <div className="m-2 py-3 overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-transparent sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        value={info.name}
                                        onChange={nameHandle}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md p-2"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        value={info.email}
                                        onChange={emailHandle}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                    <label htmlFor="phone-number" className="block text-lg font-medium text-gray-700">
                                        Phone-number
                                    </label>
                                    <input
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="address-level2"
                                        value={info.phoneNumber}
                                        onChange={phoneHandle}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                    <label htmlFor="pass" className="block text-lg font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="pass"
                                        id="pass"
                                        autoComplete="pass"
                                        value={info.password}
                                        onChange={passHandle}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                    <label htmlFor="cnfpass" className="block text-lg font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="cnfpass"
                                        id="cnfpass"
                                        autoComplete="pass"
                                        value={info.cnfPassword}
                                        onChange={cnfPassHandle}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-md  border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                        </div>
                        <div className="w-max text-right sm:px-6">
                            <button
                                disabled={cursor==="not-allowed"}   
                                type="submit"
                                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-notebook-400 hover:bg-notebook-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notebook-400 cursor-${cursor}`}>
                                Create Account
                            </button>
                        </div>
                    </div>
                </form>
                <hr className="my-4" />
                <div className="flex items-center justify-center ">
                    <SignupGoogle />
                </div>
            </div>
        </>
    )
}

export default Signup