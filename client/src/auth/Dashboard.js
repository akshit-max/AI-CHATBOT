import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
 
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate('/')}
      >
        Go to Home
      </button> 
    </div>
  );
};

export default Dashboard;
