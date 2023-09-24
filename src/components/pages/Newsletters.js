// src/components/NewsletterPage.js

import React from "react";
import week1 from "../images/week1.pdf"; // Adjust the relative path as needed

const NewsletterPage = () => {
  // Sample newsletters data (you can replace this with actual data)
  const newsletters = [
    { id: 1, title: "week1", content: "This is the content of Newsletter 1." },
    { id: 2, title: "Newsletter 2", content: "This is the content of Newsletter 2." },
    // Add more newsletters here
  ];

  return (
    <div>
      <h1>Classroom Newsletters</h1>
      <img src={week1} alt="Newsletter 1" /> {/* Add this line to display the image */}
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

export default NewsletterPage;
