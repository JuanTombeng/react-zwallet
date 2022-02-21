import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Context/UserContext";
import Signup from './Pages/Signup/index'
import Home from './Pages/Home/index'
import Profile from "./Pages/Profile";
import RequireAuth from "./Components/RequireAuth";
import LoginPage from './Pages/Login/LoginPage'
import CreatePin from './Pages/Pins/CreatePin'

const App = () => {
  return (
    // <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="create-pin" element={<CreatePin />} />
          <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    // </UserContext>
  );
};

export default App;