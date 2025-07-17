import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Summary = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/openai/summary",
        { text }
      );
      setSummary(data.result); // ✅ FIXED: use only the 'result' string
    } catch (err) {
      const errMsg =
        err.response?.data?.error || err.message || "Something went wrong";
      setError(errMsg);
      toast.error(errMsg);
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Summarize Text</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              rows="6"
              placeholder="Enter your text here..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
          <p className="text-center mt-3">
            Not this tool? <Link to="/dashboard">Go Back</Link>
          </p>
        </form>
      </div>

      <div className="card mt-4 p-3" style={{ minHeight: "200px" }}>
        <h5 className="mb-3">Summary:</h5>
        {summary ? (
          <p>{summary}</p> // ✅ Now summary is a string
        ) : (
          <p className="text-muted text-center">Summary will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default Summary;
