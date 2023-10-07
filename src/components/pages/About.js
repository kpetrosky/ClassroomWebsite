import React from "react";
import twelve from "../images/twelve.jpg";
import thirteen from "../images/thirteen.jpg";
import fourteen from "../images/fourteen.jpg";
import four from "../images/four.jpg";
import five from "../images/five.jpg";
import three from "../images/three.jpg";
import six from "../images/six.jpg";
import eight from "../images/eight.jpg";
import fifteen from "../images/fifteen.jpg";
import nine from "../images/nine.jpg";
import sixteen from "../images/sixteen.jpg";
import seven from "../images/seven.jpg";
import eleven from "../images/eleven.jpg";
import seventeen from "../images/seventeen.jpg";
import './About.css'

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>My husband and I celebrated our 20-year anniversary in July. We are high school sweethearts.
        We have two wonderful teenagers. My son is 18 and my younger child is 16. My younger child lives in Florida with her Godmother.
        We have 4 dogs who have the run of the house.
      </p>
      <img
        src={twelve} // Using imported image variable
        alt="wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={thirteen} // Using imported image variable
        alt="another wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={fourteen} // Using imported image variable
        alt="another wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={four} // Using imported image variable
        alt="fun"
        className="about-image" // You can add a class for styling if needed
      />
      <img
      src={five} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
    <img
      src={three} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
       <img
      src={six} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
        <img
      src={nine} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
        <img
      src={fifteen} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
        <img
      src={eleven} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
        <img
      src={eight} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
        <img
      src={seven} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
    <img
      src={sixteen} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
    <img
      src={seventeen} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
    </div>
  );
};

export default About;
