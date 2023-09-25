import React from "react";

const Home = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return <div onClick={handleClick}>I'm home component</div>;
};

export default Home;
