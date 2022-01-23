import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./container/pages/ForgotPassword";
import Home from "./container/pages/Home/Home";
import Login from "./container/pages/Login";
import Profile from "./container/pages/Profile";
import Register from "./container/pages/Register";
import ResetPassword from "./container/pages/ResetPassword";
import Game from "./container/pages/Game/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeApp from "./container/pages/HomeApp/HomeApp";
import About from "./container/pages/About/About";
import EditProfile from "./container/pages/EditProfile";
import HomePage from "./container/pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/homepage" element={<HomePage />}>
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="rock-papper-scissors" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
