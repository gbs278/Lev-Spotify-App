import React, { useState } from 'react';
import User from '../Classes/User'; 
import { Link, Button } from 'react-router-dom';
export default function CreateAccount() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const handleUsername = (event) => {
        event.preventDefault();
        const newdata = event.target.value;
        setUsername(newdata)
      };
      const handlePassword = (event) => {
        event.preventDefault();
        const newdata = event.target.value;
        setPassword(newdata)
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted")
        let user = new User(username, password);
        if(user.getPassword() === undefined){
          setErrorMessage("Please input a valid password")
        }
        else if( user.getUsername() === undefined){
          setErrorMessage("Please input a valid username")
        }
        else{
        console.log("checking user")
        console.log({user})
        localStorage.setItem(user.getUsername(), JSON.stringify(user))
        }
      }
      return(
        <div className="login-wrapper">
          <h1>Create account</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              <p>Username</p>
              <input type="text" onChange={(e) => handleUsername(e)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={(e) => handlePassword(e)} />
            </label>
            <div>
            <button type='button' onClick={(e) => handleSubmit(e)}>
            <Link to = "/" >
                Create a new account
            </Link>
            </button>
            </div>
          </form>
        </div>
        
      )
    }
