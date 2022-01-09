import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/index'
import Signup from './Pages/Signup/index'
import Home from './Pages/Home/index'
import TransactionHistory from "./Pages/TransactionHistory";
import Transfer from "./Pages/Transfer/Transfer";
import TransferConfirmation from "./Pages/TransferConfirmation/TransferConfirmation";
import Profile from "./Pages/Profile";
import RequireAuth from "./Components/RequireAuth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={
        <Home/>
        }/> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
        <Route path="history" element={<RequireAuth><TransactionHistory /></RequireAuth>} />
        <Route path="transfer" element={<RequireAuth><Transfer /></RequireAuth>} />
        <Route path="/transfer/transfer-confirm" element={<RequireAuth><TransferConfirmation /></RequireAuth>} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;