import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/users/users'; // Change the url

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector(
    (state) => state.user,
  ); // Add this statement
  // console.log(user)
  let myUser;

  useEffect(() => {
    setMessage('');
  }, [email, password]);

  useEffect(() => {
    setMessage(user.error);
    myUser = user;
  }, [user]);

  const handlelLogin = () => {
    if (email.length === 0 && password.length === 0) {
      setMessage('Pease Fill all the field to login');
    } else if (email.length === 0) {
      setMessage('Email should not be blank');
    } else if (password.length === 0) {
      setMessage('Password should not be blank');
    } else {
      // fetch(
      //   `http://localhost:3001/auth/login?email=${email}&password=${password}`,
      //   {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Accept: 'application/json',
      //     },
      //   },
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (!res.error) {
      //       dispatch(loginUser({ email, password }));
      //       setSuccess(true);
      //     } else {
      //       setMessage('Invalid email or password');
      //     }
      //   });
      dispatch(loginUser({
        email,
        password,
      }));

      if (user.isAuthenticated && user.user.role === 'admin') {
        history('/admin');
      } else if (user.isAuthenticated && user.user.role === 'user') {
        history('/');
        // <Navigate to="/my-reservation" replace />;
      }
    }
  };

  return (
    <div className="backdrop-saturate-25 w-full login-picture w-sreen h-screen bg-cover flex flex-col justify-center items-center p-2 bg-black bg-opacity-50">
      <div className="flex relative flex-col justify-center items-center bg-black bg-opacity-50 p-5 py-20">
        <h1 className="text-white-300 text-white mb-5 uppercase">Login</h1>
        <div className="login flex flex-col justify-center items-center">
          <input
            type="email"
            placeholder="email"
            className="p-2 border rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="p-2 border rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="login-btn"
            onClick={handlelLogin}
          >
            Login
          </button>
        </div>
        <p className="absolute top-0 left-50 h-15 w-full bg-red text-center text-white font-bold">
          {message}
        </p>
        <div className="text-white flex mt-3">
          <p>Need an account? </p>
          <a href="signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};
export default Login;
