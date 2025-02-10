import React from "react";
import "./Hero.css";

const Hero = () => {
  console.log("HERO")
  return (
    <div className="hero">
      <div className="hero-left"></div>
      <div className="heropara">
        <p>
          Bringing
          <br /> Government to <br />
          Your Fingertips <br />– Anytime, <br />
          Anywhere.
        </p>
      </div>
    </div>
  );
};

export default Hero;
