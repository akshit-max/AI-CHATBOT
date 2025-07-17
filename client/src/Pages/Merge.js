import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const AItoolsDashboard = () => {
  return (
    <>
    <Layout>
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">AI Tools Dashboard</h2>
      <div className="list-group">
        <Link to="/dashboard/summary" className="list-group-item list-group-item-action">
          📝 Summary Generator
        </Link>
        <Link to="/dashboard/para" className="list-group-item list-group-item-action">
          📄 Paragraph Generator
        </Link>
        <Link to="/dashboard/ai" className="list-group-item list-group-item-action">
          💬 AI Chatbot
        </Link>
      </div>
    </div>
    </Layout>
    </>
  );
};


export default AItoolsDashboard;
