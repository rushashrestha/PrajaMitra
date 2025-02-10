import React from "react";
import "./AboutUs.css";

const AboutUS = () => {
  return (
    <div id="about">
      <h1>About us</h1>
      <p>
        Welcome to <span className="mitra">प्रजा MITRA</span>,<br /> a digital
        initiative inspired by the vision of Project Praja. Our mission is to
        bring government services closer to citizens, ensuring accessibility,
        transparency, and efficiency in every interaction.
      </p>
      <div className="about-points">
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to simplify governance by leveraging technology to provide a
          user-friendly platform for grievance redressal, certificate issuance,
          bill payments, and more. Our goal is to make public services more
          transparent, accountable, and citizen-centric.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To create a seamless bridge between citizens and government services,
          empowering individuals with the tools they need to access essential
          services anytime, anywhere.
        </p>
      </div>
      <div className="about-section">
        <h2>What We Offer</h2>
        <p>
          <strong>Grievance Redressal:</strong> File complaints online and track
          their status in real-time. <br />
          <strong>Certificate Issuance:</strong> Apply for
          essential certificates like birth, death, income, and caste
          certificates. <br />
          <strong>Bill Payments:</strong> Pay utility bills such as electricity,
          water, and internet with ease. <br />
          <strong>Transparency:</strong> Real-time tracking and updates ensure
          accountability in service delivery.
        </p>
      </div>
      </div>
     
      <div className="about-bottom">
        <h2>Why Choose Us?</h2>
        <p>
          <strong>User-friendly:</strong> Designed with simplicity and ease of
          use in mind. <br />
          <strong>Accessible:</strong> Available 24/7, bringing services to your
          fingertips. <br />
          <strong>Transparent:</strong> Real-time updates and tracking for all
          services. <br />
          <strong>Efficient:</strong> Reducing paperwork and delays through
          digital solutions.
        </p>
      </div>

      <div className="about-bottom">
        <h2>Our Inspiration</h2>
        <p>
          Inspired by Project Praja, a pioneering initiative in Andhra Pradesh,
          we strive to replicate its success in making governance more
          accessible and efficient. By leveraging technology, we aim to empower
          citizens and transform the way public services are delivered.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
