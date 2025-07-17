import React, { useState ,useEffect} from "react";
// import { useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
import { useAuth } from "../context/Context";
import Spinner from "../auth/Spinner";
const Forget = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [ch, setCh] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
//   const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgot", {
  email,
 newpassword,
});
  
    toast.success("Password Updated Successfully")
   setCh(true);

   
   
   
   
} catch (error) {
    console.log(error);
    toast.error("Something went wrong");
}


};

useEffect(() => {
    setTimeout(() => {
        if(ch){
            
            window.location.href = "/login";
    }
    }, 2000);
  
}, [ch]); // dependency array







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
        <h3 className="text-center mb-4">FORGOT PASSWORD</h3>
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
             New Password
            </label>
            <input
              type="password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
           
            
          </div>

          <button type="submit" className="btn btn-primary w-100">
            UPDATE
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default Forget;
