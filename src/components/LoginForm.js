import React, { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!username || !password) {
      return false;
    } else {
      console.log("username is:", username);
      console.log("password is:", password);
      return true;
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          required
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <button type="submit"> Submit </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
