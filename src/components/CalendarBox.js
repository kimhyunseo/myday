import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../calendar.scss";

const CalendarBox = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="calendar-box">
      <Calendar
        onChange={setValue}
        value={value}
        locale="en-US"
        calendarType="gregory"
        formatDay={(locale, date) => String(date.getDate())}
      />
    </div>
  );
};

export default CalendarBox;
