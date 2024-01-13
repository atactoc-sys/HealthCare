// Schedule.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Schedule() {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
  });
  const [reminders, setReminders] = useState([]);

  const handleChange = (field, value) => {
    setEventDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  const handleSetReminder = () => {
    const { eventName, eventDate, eventTime } = eventDetails;
    const formattedDateTime = new Date(
      `${eventDate}T${eventTime}`
    ).toLocaleString();

    setReminders((prevReminders) => [
      ...prevReminders,
      `Reminder set for ${eventName} on ${formattedDateTime}`,
    ]);

    // Clear the event details after setting the reminder
    setEventDetails({
      eventName: "",
      eventDate: "",
      eventTime: "",
    });
  };

  return (
    <div>
      <TextField
        id="eventName"
        label="Event Name"
        value={eventDetails.eventName}
        onChange={(e) => handleChange("eventName", e.target.value)}
      />
      <TextField
        id="eventDate"
        label="Event Date"
        type="date"
        value={eventDetails.eventDate}
        onChange={(e) => handleChange("eventDate", e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="eventTime"
        label="Event Time"
        type="time"
        value={eventDetails.eventTime}
        onChange={(e) => handleChange("eventTime", e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" onClick={handleSetReminder}>
        Set Reminder
      </Button>
      <div>
        <h2>Upcoming Events:</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Schedule;
