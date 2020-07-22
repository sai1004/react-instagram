import React from "react";

const LoginForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoginForm;
