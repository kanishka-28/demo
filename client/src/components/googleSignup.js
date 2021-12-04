import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router"
import { signupApi } from '../services/api';
import Alert from '../components/Alert';
import { useState, useContext } from 'react';
import LoginContext from '../context/user/loginContext';

function SignupGoogle() {

    const {setGPhoto} = useContext(LoginContext);
    const history = useHistory();
    const [hide, sethide] = useState("hidden");
    const [error, seterror] = useState("");

    const ResponseSuccessGoogle = async (response) => {
        console.log(response);
        const password = response.profileObj.googleId
        const email = response.profileObj.email
        const name = response.profileObj.givenName
        setGPhoto(response.profileObj.imageUrl)

        Promise.resolve(signupApi({ password, email, name })).then(res => {
            localStorage.setItem("token", res.data.jwtToken);
            history.push("/");
        }).catch((e)=>{
            // console.log(e.response.data);
            seterror(e.response.data.error);
            sethide("block");
            setTimeout(() => {
                sethide("hidden");
                if(e.response.status!==500){
                    history.push("/login")
                }
            }, 2000);
        }
    )}
    return (
        <>
            <div className={hide}>
                <Alert message={error} />
            </div>
            <div className="my-3  flex">
                <div className="m-auto rounded-lg">
                    <GoogleLogin
                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                        buttonText="Signup with google"
                        onSuccess={ResponseSuccessGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </>
    )
}

export default SignupGoogle;