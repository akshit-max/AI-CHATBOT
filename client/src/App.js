import { Routes, Route } from "react-router-dom";
import './App.css';
// import Layout from './components/Layout';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Dashboard from "./auth/Dashboard";
import PrivateRoute from "./auth/Private";
import Summary from "./Pages/Summary";
import Paragraph from "./Pages/Para";
import Chatbot from "./Pages/AI";
// import JSConverter from "./Pages/JS";
// import ImageGenerator from "./Pages/Im";
import NotFound from "./Pages/PNF";
import AItoolsDashboard from "./Pages/Merge";
import Forget from "./Pages/Forgot";



function App() {
  return (
    <>
   
    <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        {/* <Route path="/merge" element={<AItoolsDashboard />} /> */}
        {/* <Route path="/js" element={<JSConverter />} /> */}
        {/* <Route path="/im" element={< ImageGenerator/>} /> */}
        <Route path="*" element={< NotFound/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<AItoolsDashboard />} />
        <Route path="summary" element={<Summary />} />
        <Route path="para" element={<Paragraph />} />
        <Route path="ai" element={<Chatbot />} />
        
        </Route>
        
      </Routes>
    
    </>
  );
}

export default App;








