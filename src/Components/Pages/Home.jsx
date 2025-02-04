import React from "react";
import Hero from "../../Components/Hero/Hero"; // Correct path
import Services from "../../Components/Services/Services"; // Correct path

const Home = () => {
  console.log("Homeeeeee");
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
