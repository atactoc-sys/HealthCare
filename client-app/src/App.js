import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Home from "./components/Home/Home.jsx";
import Reports from "./components/Reports/Reports.jsx";
import Login from "./components/Login/Login.jsx";
import Schedule from "./components/Shedule/Shedule.jsx";

function App() {
  return (
    <Router>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/shedule" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
