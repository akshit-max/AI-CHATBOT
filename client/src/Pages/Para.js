
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Paragraph = () => {
  const [prompt, setPrompt] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/openai/paragraph", { topic: prompt });
      setParagraph(data.result);
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message || "Something went wrong";
      setError(errMsg);
      toast.error(errMsg);
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Generate Paragraph</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your prompt here..."
              required
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Generate</button>
          <p className="text-center mt-3">
            Not this tool? <Link to="/dashboard">Go Back</Link>
          </p>
        </form>
      </div>
      <div className="card mt-4 p-3">
        <h5 className="mb-3">Generated Paragraph:</h5>
        {paragraph ? <p>{paragraph}</p> : <p className="text-muted text-center">Result will appear here.</p>}
      </div>
    </div>
  );
};

export default Paragraph;
