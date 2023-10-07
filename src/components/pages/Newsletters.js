import React from "react";
import newsletter1 from "../images/newsletter1.png"; // Assuming this is a new newsletter image
import oldNewsletterAug1 from "../images/oldNewsletterAug1.png"; // Path to old newsletter image
import oldNewsletteraugweek2 from '../images/oldNewslettersaugweek2.png'
import oldNewsletteraugweek3 from '../images/oldnewsletteraugweek3.png'
import './Newsletters.css'; // Import the CSS file

const Newsletters = () => {
  // Sample newsletters data (you can replace this with actual data)
  const newsletters = [
    { id: 1, title: "Important things to know:", content: "." },
   
    // Add more newsletters here
  ];

  return (
    <div>
      <h1>Classroom Newsletters</h1>
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        <img src={newsletter1} alt="Newsletter 1" /> {/* New newsletter */}
        <img src={oldNewsletterAug1} alt="Old Newsletter 1" /> {/* Old newsletter */}
        <img src={oldNewsletteraugweek2} alt="Old Newsletter 2" /> {/* Old newsletter */}
        <img src={oldNewsletteraugweek3} alt="Old Newsletter 3" /> {/* Old newsletter */}
      </div>
      <ul>
        {newsletters.map((newsletter) => (
          <li key={newsletter.id}>
            <h2>{newsletter.title}</h2>
            <p>{newsletter.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newsletters;
