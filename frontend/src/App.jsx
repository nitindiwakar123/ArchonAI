import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import InterviewPrep from "./pages/InterviewPrep";
import AppLayout from "./layouts/AppLayout";
import AboutPage from "./pages/AboutPage";
import Protect from "./layouts/Protect";

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/dashboard" element={
          <Protect>
            <Dashboard />
          </Protect>
        } />

        <Route path="/interview/:id" element={
          <Protect>
            <InterviewPrep />
          </Protect>
        } />
      </Route>


    </Routes>
  );
}

export default App;