import React from "react";

const Signin = () => {
  return (
    <div className="card">
      <div className="cardBody">
        <h2> Instagram </h2>
        <input
          type="text"
          placeholder="Phone Number , Username or Email"
          required
        />
        <br />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <br />
        <button> Signin </button>
        <br />
        <br />
        <div></div> or <div></div>
        <h4> Login With Facebook </h4>
        <p> Forgot Password? </p>
      </div>
    </div>
  );
};

export default Signin;
