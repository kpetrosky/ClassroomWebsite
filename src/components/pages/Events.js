import React from "react";

const Events = () => {
  // Define your class projects data here
  const events = [
    {
      id: 1,
      title: "Science Fair",
      date: "2023-10-15",
      description: "Annual science fair in Room 101.",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "2023-10-25",
      description: "Discuss student progress with parents.",
    },
    // Add more events here
  ];

  return (
    <div>
      <h1>Events that are happening in our Class</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;

