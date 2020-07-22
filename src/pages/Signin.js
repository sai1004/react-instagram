import React, { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!username || !password) {
      return false
    } else {
      console.log("username is:", username);
      console.log("password is:", password);
      return true
    }

  }

  return (
    <div className="card">
      <div className="cardBody">
        <h2> Instagram </h2>
        <form onSubmit={submitHandler}>
          <input type="email" placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required
          />

          <input type="password" placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />

          <button type="submit"> Submit </button>
        </form>
        <div></div> or <div></div>
        <h4> Login With Facebook </h4>
        <p> Forgot Password? </p>
      </div>
    </div>
  );
};

export default Signin;
