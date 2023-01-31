// import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../Redux/authentification/login';

const SignUp = () => {
  const [username, SetUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    setMessage('');
  }, [email, password, name, username]);

  const handlelSignup = () => {
    if (name.length === 0 && username.length === 0 && email.length === 0 && password.length === 0) {
      setMessage('Pease Fill all the field to login');
    } else if (name.length === 0) {
      setMessage('Name should not be blank');
    } else if (username.length === 0) {
      setMessage('Username should not be blank');
    } else if (email.length === 0) {
      setMessage('Email should not be blank');
    } else if (email.length === 0) {
      setMessage('Email should not be blank');
    } else if (password.length === 0) {
      setMessage('Password should not be blank');
    } else {
      fetch(`http://localhost:3001/auth/signup?name=${name}&username=${username}&email=${email}&password=${password}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then((res) => res.json()).then((res) => {
        if (res.id) {
          dispatch(signUp({
            name, username, email, password,
          }));
          setSuccess(true);
        } else {
          setMessage(`Retry again${res.errors[0]}`);
        }
      });
    }
  };

  return (
    <>
      {
      isSuccess ? (
        history('/login')
      ) : (
        <div className="backdrop-saturate-25 login-picture w-sreen h-screen bg-cover flex flex-col justify-center items-center p-2 bg-black bg-opacity-50">
          <div className="relative flex flex-col justify-center items-center p-2 bg-black bg-opacity-50 p-5 py-20">
            <h1 className="text-white-300 text-white mb-5 uppercase">Sign up</h1>
            <div className="login flex flex-col justify-center items-center">
              <input type="text" placeholder="Name" className="p-2 border rounded-lg" onChange={(e) => setName(e.target.value)} />
              <br />
              <input type="text" placeholder="Username" className="p-2 border rounded-lg" onChange={(e) => SetUserName(e.target.value)} />
              <br />
              <input type="email" placeholder="email" className="p-2 border rounded-lg" onChange={(e) => setEmail(e.target.value)} />
              <br />
              <input type="password" placeholder="password" className="p-2 border rounded-lg" onChange={(e) => setPassword(e.target.value)} />
              <br />
              <button type="submit" className="login-btn" onClick={handlelSignup}>Sign up</button>
            </div>
            <p className="absolute top-0 left-50 h-15 w-full bg-red text-center text-white font-bold">{message}</p>
            <div className="text-white flex mt-3">
              <p>Already have an account? </p>
              <a href="login">Login</a>
            </div>
          </div>
        </div>
      )
    }
    </>

  );
};
export default SignUp;
