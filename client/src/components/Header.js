import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/Context';
const Header = () => {
  const[auth,setAuth]=useAuth()

const handleLogout = () => {
  // Clear local storage
  localStorage.clear();

  // Reset auth state
  setAuth({
    ...auth,
    user: null,
    token: ''
  });

  // Redirect to login
  window.location.href = "/login";
};

  return (
    <>
    
    {
    
    !auth?.token? 
    (<>
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: '#f9f9f9',
        padding: '0.8rem 1.5rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fw-bold fs-4"
          to="/"
          style={{
            color: '#333',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          AI
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <li className="nav-item">
              <NavLink
                className="btn"
                to="/register"
                style={{
                  background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
                  color: '#fff',
                  fontWeight: '500',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '30px',
                }}
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn"
                to="/login"
                style={{
                  background: 'linear-gradient(to right, #43e97b, #38f9d7)',
                  color: '#fff',
                  fontWeight: '500',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '30px',
                }}
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>)

 
     : 



         (<>
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: '#f9f9f9',
        padding: '0.8rem 1.5rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fw-bold fs-4"
          to="/"
          style={{
            color: '#333',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          AI
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <li className="nav-item">
              <NavLink
                className="btn" onClick={handleLogout}
                to="/login"
                style={{
                  background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
                  color: '#fff',
                  fontWeight: '500',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '30px',
                }}
              >
                Log Out
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </>)
              
            }

      
    </>
  );
};

export default Header;
