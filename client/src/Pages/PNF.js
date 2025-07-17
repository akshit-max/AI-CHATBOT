import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white px-3">
      <h1 className="display-1 fw-bold mb-3">404</h1>
      <h2 className="h4 fw-semibold mb-2">Page Not Found</h2>
      <p className="text-center text-secondary mb-4">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary fw-semibold px-4 py-2"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
