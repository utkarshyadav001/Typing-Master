import React, { useState } from 'react'
// import { unstable_HistoryRouter }  from 'react-router-dom';
import '../style/signin.css'
import '../style/login.css'

const Login = (props) => {

    const { mode, showAlert } = props;

    const [data, updateData] = useState({ email: "", password: "" });

    const host = "http://localhost"
    const port = 5000;

    const onChange = (e) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };


    const loginFun = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        let response = await fetch(`${host}:${port}/auth/login/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password })
        });

        const getUserData = await response.json();
        console.log(getUserData);

        // if user enter wrong pass or gmail then 
        if (getUserData.Success === false) {
            console.log("fail");
            // displayAlert(`Failed`, `${getUserData.error}`);
            showAlert("fail", `${getUserData.errors[0].msg}`)
        }
        else {
            localStorage.setItem("authToken", getUserData.authToken);
            // window.location.href = "/"
        }
    };


    return (
        <div id={`${mode}`} className='signin'>
            <div id="signinbox">
                <form onSubmit={loginFun}>
                    <h1>Login</h1>

                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id='email' onChange={onChange} required />
                    </div>

                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='password' minLength={5} onChange={onChange} required />
                    </div>

                    <div className="fromBtnBox">
                        <input type="submit" value="Login" className='formBtn' />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login