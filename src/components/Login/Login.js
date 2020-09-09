import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../../firebase"
//import { useState } from '';


function Login() {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    
    const history = useHistory();
    const signIn = (e) => {
        e.preventDefault();
        /*
        auth.sighInWithEmailAndPassword("", "password")
        .auth()
        .catch();
        */

        history.push('/');


    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(

        ).then(

        ).catch();
        history.push('/');
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="login__container">
                <h1>Sing In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />


                </form>
                <button type="submit" onClick={signIn} className="login__signinButton">Sign in</button>
                <p>Amazon fake clone yore agree to sale ple see our privaicty Notica Cookies ans our interes Basen no add Notica</p>

                <button type="submit" onClick={register} className="login__registerButton">Create your amaozn account</button>
            </div>
        </div>
    )
}

export default Login
