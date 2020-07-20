import React from "react";

function getAlet() {
  return alert("Alert is Invoked!");
}

const Home = () => {
  return (
    <div>
      <h1> Hello Home Page!! </h1>
      <button onClick={getAlet}> Hit </button>
    </div>
  );
};

export default Home;
