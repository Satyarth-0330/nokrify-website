import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import PortalLayout from "./components/PortalLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Role Selection Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Job Seeker Portal — Home, About, Contact only */}
          <Route
            path="/job-seeker/*"
            element={<PortalLayout portal="job-seeker" />}
          />

          {/* Employer Portal — Home, About, Contact only */}
          <Route
            path="/employer/*"
            element={<PortalLayout portal="employer" />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
