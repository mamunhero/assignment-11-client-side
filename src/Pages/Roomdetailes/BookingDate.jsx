import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const BookingDate = () => {
  const [startDate, setStartData] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="mt-5 mb-5">
      <DatePicker
        selected={startDate}
        onChange={date=>setStartData(date)}
        placeholderText="Start Date"
        dateFormat={"dd/MM/yyyy"}
        minDate={new Date()}
      />
      <DatePicker
        selected={endDate}
        onChange={date=>setEndDate(date)}
        placeholderText="End Date"
        dateFormat={"dd/MM/yyyy"}
        minDate={new Date()}
      />
    </div>
  );
};

export default BookingDate;





