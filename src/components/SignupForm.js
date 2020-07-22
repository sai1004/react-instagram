import React, { useState } from "react";

const SignupForm = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        if (!username || !email || !password || !confirmPassword) {
            return false;
        } else {
            console.log("username is:", username);
            console.log("password is:", password);
            return true;
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler} autoComplete="off">
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    required
                />

                <button type="submit"> Sign Up </button>
            </form>
        </React.Fragment>
    );
};

export default SignupForm;
