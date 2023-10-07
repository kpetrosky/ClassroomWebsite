import React from "react";
import ruleOne from "../images/ruleOne.png";
import ruleTwo from "../images/ruleTwo.png";
import ruleThree from "../images/ruleThree.png";
import ruleFour from "../images/ruleFour.png";
import ruleFive from "../images/ruleFive.png";
import ruleSix from "../images/ruleSix.png";



const Expectations = () => {
  return (
    <div>
      <h1>My Expectations</h1>
     
      <img
        src={ruleOne} // Using imported image variable
        alt="wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={ruleTwo} // Using imported image variable
        alt="another wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={ruleThree} // Using imported image variable
        alt="another wedding"
        className="about-image" // You can add a class for styling if needed
      />
      <img
        src={ruleFour} // Using imported image variable
        alt="fun"
        className="about-image" // You can add a class for styling if needed
      />
      <img
      src={ruleFive} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
    <img
      src={ruleSix} // Using imported image variable
      alt="fun"
      className="about-image" // You can add a class for styling if needed
    />
       
    </div>
  );
};

export default Expectations;
