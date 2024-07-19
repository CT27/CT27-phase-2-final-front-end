import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
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

    // Format the form data
    const formattedEntries = entries
      .map((entry) => {
        const date = entry.date ? format(entry.date, "dd/MM/yyyy") : "N/A";
        const event = entry.event ? entry.event.label : "N/A";
        return `Date: ${date}\nEvent: ${event}\nHours Worked: ${entry.hours}`;
      })
      .join("\n\n");

    const subject = "Time Log Submission";
    const body = `Here are the time log entries:\n\n${formattedEntries}`;

    // Construct the mailto URL
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Time Log Form</h2>
      <form onSubmit={handleSubmit}>
        {entries.map((entry, index) => (
          <div key={index} className="mb-3 border p-3 rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor={`date-${index}`} className="form-label">
                Date:
              </label>
              <DatePicker
                selected={entry.date}
                onChange={(date) => handleDateChange(index, date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                id={`date-${index}`}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`event-${index}`} className="form-label">
                Event:
              </label>
              <Select
                id={`event-${index}`}
                options={events}
                onChange={(event) => handleEventChange(index, event)}
                className="react-select-container"
                classNamePrefix="react-select"
                value={entry.event}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`hours-${index}`} className="form-label">
                Hours Worked:
              </label>
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
              className="btn btn-danger me-2"
            >
              Remove Entry
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addEntry}
          className="btn btn-success me-2"
        >
          Add Entry
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TimeLogForm;
