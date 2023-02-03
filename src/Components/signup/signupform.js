import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userSignUp } from '../../Redux/users/users';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState('');

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.user,
  );

  const navigate = useNavigate();

  useEffect(() => {
  }, [passwordMismatch]);

  useEffect(() => {
    if (user.signupResponseMsg === 'Created') {
      navigate('/login');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirm_password.value) {
      // dispatch(passwordMismatch());
      setPasswordMismatch('Password mismatch!');
    } else {
      setPasswordMismatch('');
      dispatch(userSignUp({
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lk-signUpForm lk-c-flex">
      <div className="lk-error ">
        <ul className="lk-error-message">
          <li>{passwordMismatch}</li>

          {
           user.errorMessages.errors && user.errorMessages.errors.map((er) => (
             <li key={er}>{er}</li>
           ))
}

        </ul>
      </div>
      <div className="lk-input-wrapper">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Full Name"
          className="lk-input"
          min="2"
          max="250"
        />
      </div>
      <div className="lk-input-wrapper">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          placeholder="User Name"
          className="lk-input"
          min="2"
          max="250"
        />
      </div>
      <div className="lk-input-wrapper">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          className="lk-input"
        />
      </div>
      <div className="lk-input-wrapper">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          className="lk-input"
          min="6"
          max="250"
        />
      </div>

      <div className="lk-input-wrapper">
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirm_password"
          placeholder="Confirm Password"
          className="lk-input"
          min="6"
          max="250"
        />
      </div>
      <div className="lk-input-wrapper lk-submit-wrapper lk-c-flex">
        <input type="submit" value="Sign Up" className="lk-submit" />
      </div>
    </form>
  );
};

export default SignUpForm;
