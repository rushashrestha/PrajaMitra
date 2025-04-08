import React from "react";
import Hero from "../../Components/Hero/Hero"; 
import Services from "../../Components/Services/Services"; 
import AboutUS from "../AboutUs/AboutUs";
import Navbar from "../Navbar/Navbar";


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
