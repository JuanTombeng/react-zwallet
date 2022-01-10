import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/index'
import Signup from './Pages/Signup/index'
import Home from './Pages/Home/index'
import TransactionHistory from "./Pages/TransactionHistory";
import Transfer from "./Pages/Transfer/Transfer";
import TransferInput from "./Pages/TransferInput/TransferInput";
import TransferConfirmation from "./Pages/TransferConfirmation/TransferConfirmation";
import Profile from "./Pages/Profile";
import RequireAuth from "./Components/RequireAuth";
import LoginPage from './Pages/Login/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={
        <Home/>
        }/> */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
        <Route path="history" element={<RequireAuth><TransactionHistory /></RequireAuth>} />
        <Route path="transfer" element={<RequireAuth><Transfer /></RequireAuth>} />
        <Route path="/transfer/transfer-input/:id" element={<RequireAuth><TransferInput /></RequireAuth>} />
        <Route path="/transfer/transfer-confirm" element={<RequireAuth><TransferConfirmation /></RequireAuth>} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;