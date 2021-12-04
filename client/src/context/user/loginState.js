import react, {useState, useEffect} from "react";
import { getUser } from "../../services/api";
import LoginContext from "./loginContext";

const LoginState = (props) => {

    const [gPhoto, setGPhoto] = useState("")
    const [islogin , setlogin] = useState(false)
    
    useEffect(() => {
        Promise.resolve(getUser()).then(res => {
            setlogin(true); 
            console.log("sbse phle ye ");
            }).catch((e) => {
                console.log(e.response);
            })
    }, [])

    const info = {gPhoto, setGPhoto, islogin , setlogin}

    return (
        <LoginContext.Provider value={info}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;
