import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ResumeScore from "./pages/ResumeScore";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ResumeAnalyse from "./pages/ResumeAnalyse";
import NotFound from "./pages/NotFound";
import ResumeUploader from "./pages/ResumeUploader";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume-score"
          element={
            <ProtectedRoute>
              <ResumeScore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume-analyse"
          element={
            <ProtectedRoute>
              <ResumeAnalyse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume-uploader"
          element={
            <ProtectedRoute>
              <ResumeUploader />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
