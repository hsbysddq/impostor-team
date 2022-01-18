import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./container/pages/ForgotPassword";
import Login from "./container/pages/Login";
// import PlayGame from './container/pages/PlayGame';
import Register from "./container/pages/Register";
import ResetPassword from "./container/pages/ResetPassword";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route path="/play-game" element={<PlayGame />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
