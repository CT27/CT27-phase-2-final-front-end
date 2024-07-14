import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./TimeLogForm.css";
import { format } from "date-fns";

// Dummy event data
const events = [
  { value: "event1", label: "Event 1" },
  { value: "event2", label: "Event 2" },
  { value: "event3", label: "Event 3" },
  // Add more dummy events as needed
];

const TimeLogForm = () => {
  const [entries, setEntries] = useState([
    { date: null, event: null, hours: "" },
  ]);

  const handleDateChange = (index, date) => {
    const newEntries = [...entries];
    newEntries[index].date = date;
    setEntries(newEntries);
  };

  const handleEventChange = (index, event) => {
    const newEntries = [...entries];
    newEntries[index].event = event;
    setEntries(newEntries);
  };

  const handleHoursChange = (index, e) => {
    const newEntries = [...entries];
    newEntries[index].hours = e.target.value;
    setEntries(newEntries);
  };

  const addEntry = () => {
    setEntries([...entries, { date: null, event: null, hours: "" }]);
  };

  const removeEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(entries);
  };

  return (
    <div className="time-log-form">
      <form onSubmit={handleSubmit}>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <div className="form-group">
              <label htmlFor={`date-${index}`}>Date:</label>
              <DatePicker
                selected={entry.date}
                onChange={(date) => handleDateChange(index, date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`event-${index}`}>Event:</label>
              <Select
                id={`event-${index}`}
                options={events}
                onChange={(event) => handleEventChange(index, event)}
                className="form-control"
                value={entry.event}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`hours-${index}`}>Hours Worked:</label>
              <input
                type="number"
                id={`hours-${index}`}
                value={entry.hours}
                onChange={(e) => handleHoursChange(index, e)}
                className="form-control"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEntry(index)}
              className="remove-button"
            >
              Remove Entry
            </button>
          </div>
        ))}
        <button type="button" onClick={addEntry} className="add-button">
          Add Entry
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TimeLogForm;
