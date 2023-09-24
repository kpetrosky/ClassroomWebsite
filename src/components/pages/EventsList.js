// src/components/EventList.js

import React from "react";
import Events from "../Events";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((events) => (
        <Events key={events.id} event={events} />
      ))}
    </div>
  );
};

export default EventList;
