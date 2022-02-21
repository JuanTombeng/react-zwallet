import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { userContext } from "../../Context/UserContext";
import defaultProfile from "../../images/default.jpg";
import "./home.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import Balance from "../../Components/Balance/Balance";
import Chart from "../../Components/Chart/Chart";
import History from "../../Components/History/History";
import Card from "../../Components/Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { GetUserDetail } from "../../Redux/actions/users";

const Home = () => {
  // const [loading, setLoading] = useState(false);
  // const { user, setUser } = useContext(userContext);

  const [user, setUser] = useState(null);
  const dispacth = useDispatch();
  const { data, loading, error } = useSelector((state) => state.UserDetail);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  // const [headerProfile, setHeaderProfile] = useState({
  //   displayName: "",
  //   phoneNumber: "",
  //   balance: 0,
  // });
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   axios({
  //     baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
  //     method: "GET",
  //     url: `/v2/transactions/transaction-history/`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       setLoading(false);
  //       const result = res.data.data;
  //       setTransactionHistory(result);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setErrorMessage(err.response.message);
  //     });
  // }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispacth(GetUserDetail());
      setUser(data[0]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    user && (
      <div className="Home d-flex">
        <div className="container-home d-flex flex-column">
          <Header
            display_name={
              user ? `${user.first_name} ${user.last_name}` : `Profile Name`
            }
            phone_number={user ? user.phone_number : `Phone Number`}
            profile_picture={user ? user.profile_picture : defaultProfile}
          />
          <Main>
            <Navbar onClick={handleLogout} />
            <div className="main-section d-flex flex-column">
              <Balance
                balance={user ? user.balance : 0}
                phone_number={user ? user.phone_number : `Phone Number`}
              />
              <div className="lower-section d-flex">
                <Chart
                  income={user && user.income}
                  outcome={user && user.outcome}
                />
                <History>
                  {transactionHistory.map((card) => {
                    if (user) {
                      if (card.to_user_id !== user.id) {
                        return (
                          <Card
                            key={card.id}
                            first_name={card.first_name}
                            last_name={card.last_name}
                            transaction_type={card.transaction_type}
                            amount={`+ ${card.amount}`}
                            image={card.profile_picture}
                            color="green"
                          />
                        );
                      } else {
                        return (
                          <Card
                            key={card.id}
                            first_name={card.first_name}
                            last_name={card.last_name}
                            transaction_type={card.transaction_type}
                            amount={`- ${card.amount}`}
                            image={card.profile_picture}
                            color="red"
                          />
                        );
                      }
                    }
                  })}
                </History>
              </div>
            </div>
          </Main>
          <Footer />
        </div>
      </div>
    )
  );
};

export default Home;
