import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./container/pages/ForgotPassword";
import Home from "./container/pages/Home/Home";
import Login from "./container/pages/Login";
import Profil from "./container/pages/Profil/profil.page";
import Register from "./container/pages/Register";
import ResetPassword from "./container/pages/ResetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeApp from "./container/pages/HomeApp/HomeApp";
import About from "./container/pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
