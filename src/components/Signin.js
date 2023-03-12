import React, { useState } from 'react'
import '../style/signin.css'


const Signin = (props) => {

  const { mode } = props;

  const [data, updateData] = useState({ username: "", FirstName: "", LastName: "", email: "", password: "", conPassword: "" });

  const host = "http://localhost"
  const port = 5000;

  const onChange = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };




  const Signup = async (e) => {

    e.preventDefault();
    const { username, FirstName, LastName, email, password, conPassword } = data;

    if (password === conPassword) {

      let response = await fetch(`${host}:${port}/auth/createuser/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, FirstName, LastName, email, password })
      });

      const getUserData = await response.json();
      console.log(getUserData);

      // if user enter wrong pass or gmail then 
      if (getUserData.Success === false) {
        console.log("fail")
        // displayAlert(`Failed`, `${getUserData.error}`);
      }
      else {
        localStorage.setItem("authToken", getUserData.authToken);
        // window.location.href = "/"
      }


    } else {
      return
    };
    

  };


  return (
    <div id={`${mode}`} className='signin'>
      <div id="signinbox">
        <form onSubmit={Signup}>
          <h1>Create a new account</h1>

          <div className="item">
            <label htmlFor="username">Enter a username</label>
            <input type="text" name="username" id='username' minLength={5} onChange={onChange} required />
          </div>

          <div className="item nameBox">
            <div>
              <label htmlFor="firstname">Enter first name</label>
              <input type="text" name="FirstName" id='firstname' minLength={5} onChange={onChange} required />
            </div>
            <div>
              <label htmlFor="LastName">Enter last name</label>
              <input type="text" name="LastName" id='LastName' minLength={5} onChange={onChange} required />
            </div>
          </div>

          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id='email' onChange={onChange} required />
          </div>

          <div className="item">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id='password' minLength={5} onChange={onChange} required />
          </div>
          <div className="item">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" name="conPassword" id='cpassword' onChange={onChange} required />
          </div>

          <div className="fromBtnBox">
            <input type="submit" value="Sign up" className='formBtn' />
          </div>

        </form>

      </div>
    </div>
  )
}

export default Signin