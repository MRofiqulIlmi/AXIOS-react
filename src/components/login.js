import React, {useState} from 'react';
import "../App.css";
import axios from 'axios';

function Login({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {
        setError("");
        setPassword("");
        setUsername("");
        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data:{
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem('userToken',res.data.token);
        }).catch(err => {
            console.log("err.response.data");
            console.log(err.response.data);
            setError(err.response.data);
        })
    }

    return ( 
        <div className='login'>
            <div className='login-inputs'>
                <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                {error && <small>{error}</small>}
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
     );
}

export default Login;