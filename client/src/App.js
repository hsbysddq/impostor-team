import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './container/pages/ForgotPassword';
import Login from './container/pages/Login';
// import FormRegister from './components/FormRegister';
import Register from './container/pages/Register';
import ResetPassword from './container/pages/ResetPassword';
// import React, { useReducer, createContext } from 'react'
// import Home from './container/pages/Home';

// context
// export const AuthContext = createContext()

// // inisiasi state
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user))
//       localStorage.setItem("token", JSON.stringify(action.payload.user))
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       }

//     case "LOGOUT":
//       localStorage.clear()
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: action.payload.user
//       }
//     default: 
//       return state;
//   }
// }

function App() {
  // const  [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Router>
      <Routes>
        {/* <AuthContext.Provider value={{
            state,
            dispatch
          }}>
            <Home/>
            {!state.isAuthenticated ?
            <Route path="/login" element={<Login />} /> :
            // <Link
            //   to="/login"
            // /> :
            <Route path="/" element={<Home />} />
            // <Link
            // to="/"
            // />
            }
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes> */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* </AuthContext.Provider> */}
      </Routes>
    </Router>
  );
}

export default App;
