import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";

const Signin = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="main_card">
      <div
        className="card"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <div className="cardBody">
          <h2> Instagram </h2>
          <LoginForm />
          <div></div> or <div></div>
          <h4> Login With Facebook </h4>
          <p> Forgot Password? </p>
        </div>
      </div>

      <div>
        <div className="card-below">
          <div className="cardBody">
            <h4> Don't have an account? </h4>
            <button>
              <Link to="/signup"> Signup </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
