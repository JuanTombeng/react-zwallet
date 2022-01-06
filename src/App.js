import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/index'
import Signup from './Pages/Signup/index'
import Home from './Pages/Home/index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={
        <Home/>
        }/> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="register" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;