import { useState } from 'react';
import { auth } from "../../config/firebase";
import "./auth.css";
import { createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut
        } from 'firebase/auth';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetFields = () =>{
      setEmail("");
      setPassword("");
    };

    const logIn = async () => {
      try{
        await signInWithEmailAndPassword(auth, email, password);
        alert("User log in");
        resetFields();
      }catch(err){
        resetFields();
        alert(err.message);
      }
    };
  
    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User sign up and log in");
        resetFields();
      } catch (err) {
        resetFields();
        alert(err.message);
      }
    };
    
    const logOut = async () => {
      try{
        await signOut(auth);
        alert("User log out");
        resetFields();
      }catch (err){
        resetFields();
        alert(err.message);
      }
    }

     return (
        <div className='container'>
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <div className='password-container'>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button onClick={logIn}>Sign in</button>
            <button onClick={signUp}>Sign up</button>
            <button onClick={logOut}>Sign out</button>
        </div>
    )
}