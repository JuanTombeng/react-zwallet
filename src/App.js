import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Context/UserContext";
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
import ManagePhoneNumber from "./Pages/PhoneNumber/ManagePhoneNumber";
import CreatePin from './Pages/Pins/CreatePin'
import TransferSuccess from "./Pages/TransferSuccess/TransferSuccess";

const App = () => {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="create-pin" element={<CreatePin />} />
          <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
};

export default App;