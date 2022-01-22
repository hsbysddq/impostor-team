import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./container/pages/ForgotPassword";
import Home from "./container/pages/Home/Home";
import Login from "./container/pages/Login";
import Profil from "./container/pages/Profil/profil.page";
import Register from "./container/pages/Register";
import ResetPassword from "./container/pages/ResetPassword";
import Game from "./container/pages/Game/Game";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/rock-papper-scissors" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
