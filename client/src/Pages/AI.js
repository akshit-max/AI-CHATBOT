import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/openai/chat", { message:prompt });

      // Check and safely stringify if needed
      const result = typeof data.result === "string" ? data.result : JSON.stringify(data.result, null, 2);

      setResponse(result);
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
        <h3 className="text-center mb-4">AI Chatbot</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ask me anything..."
              required
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info w-100">Ask</button>
          <p className="text-center mt-3">
            Not this tool? <Link to="/dashboard">Go Back</Link>
          </p>
        </form>
      </div>

      <div className="card mt-4 p-3">
        <h5 className="mb-3">Response:</h5>
        {response ? (
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{response}</pre>
        ) : (
          <p className="text-muted text-center">Response will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
