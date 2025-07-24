import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      id: 1,
      name: 'Oscar',
      email,
    };

    dispatch(setUser(dummyUser));
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
