import React from "react";
import Hero from "../../Components/Hero/Hero"; // Correct path
import Services from "../../Components/Services/Services"; // Correct path
import AboutUS from "../AboutUs/AboutUs";

const Home = () => {
  console.log("Homeeeeee");
  return (
    <div>
      <Hero />
      <Services />
      <AboutUS />
    </div>
  );
};

export default Home;
