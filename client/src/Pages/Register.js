import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
// import "../../styles/AuthStyles.css";

const Register= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const navigate = useNavigate();
//   const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
  email,
  password,
});

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      
        navigate( "/login");
      } 
      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
   
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh", background: "#f0f2f5" }}
    >
      <div
        className="card shadow"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "2rem",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3 className="text-center mb-4">SIGN UP</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email address
            </label>
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex justify-content-end mb-3">
              <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/login")}
              style={{ fontSize: "14px" }}
            >
              LOGIN
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default  Register;
