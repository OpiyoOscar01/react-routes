import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const navigate =useNavigate();

  return (
    <div>
      <h1>Welcome {user ? user.name : 'Guest'}</h1>
      <button onClick={()=>navigate('/home')}>Home</button>
    </div>
  );
};

export default Dashboard;
