import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router"
import { loginApi } from '../services/api';
import { useState, useContext } from "react"
import LoginContext from '../context/user/loginContext';
import Alert from '../components/Alert';

function LoginGoogle() {

    const { setGPhoto, setlogin } = useContext(LoginContext);

    const history = useHistory();
    const [hide, sethide] = useState("hidden");
    const [error, seterror] = useState("");

    const ResponseSuccessGoogle = async (response) => {
        console.log(response);
        const password = response.profileObj.googleId
        const email = response.profileObj.email
        
        Promise.resolve(loginApi({ password, email })).then(res => {
            localStorage.setItem("token", res.data.jwtToken);
            localStorage.setItem("googlePhoto", response.profileObj.imageUrl);
            history.push("/");
            setlogin(true)
            setGPhoto(response.profileObj.imageUrl)
        }).catch((e) => {
            seterror(e.response.data.error);
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
            <div className="my-3  flex">
                <div className="m-auto rounded-lg">
                    <GoogleLogin
                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={ResponseSuccessGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </>
    )
}

export default LoginGoogle;