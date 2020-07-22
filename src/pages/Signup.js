import React from "react";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main_card">
      <div className="card">
        <div className="cardBody">
          <h2> Instagram </h2>
          <h4>Sign up to see photos and videos from your friends.</h4>
          <SignupForm />

          <p>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
        </div>
      </div>

      <div className="card-below">
        <h5>Have an account? </h5>
        <button>
          <Link to="/signin"> Log in </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
