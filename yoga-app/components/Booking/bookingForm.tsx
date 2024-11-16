import React, { useState } from "react";

type BookingFormProps = {
  yogaClass: { name: string; availableTimes: string[] };
  onSubmitBooking: (time: string) => void;
};

const BookingForm: React.FC<BookingFormProps> = ({
  yogaClass,
  onSubmitBooking,
}) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTime) {
      onSubmitBooking(selectedTime);
    }
  };

  return (
    <div>
      <h2>Booking for {yogaClass.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select a time:</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Choose a time</option>
            {yogaClass.availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
