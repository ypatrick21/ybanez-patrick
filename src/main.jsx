// main.jsx or App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
