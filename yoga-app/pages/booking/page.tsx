"use client";

import React, { useState } from "react";
import ClassList from "../../components/Booking/classList.tsx";
import BookingForm from "../../components/Booking/bookingForm.tsx";

interface YogaClass {
  id: number;
  name: string;
  description: string;
  availableTimes: string[];
}

const classes: YogaClass[] = [
  {
    id: 1,
    name: "Morning Vinyasa",
    description: "A gentle flow to start the day",
    availableTimes: ["7:00 AM", "9:00 AM"],
  },
  {
    id: 2,
    name: "Power Yoga",
    description: "Intense session for strength",
    availableTimes: ["10:00 AM", "1:00 PM"],
  },
  {
    id: 3,
    name: "Restorative Yoga",
    description: "Relax and unwind with gentle poses",
    availableTimes: ["3:00 PM", "6:00 PM"],
  },
];

const Home: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null); // Better typing
  const [bookingMessage, setBookingMessage] = useState<string>("");

  const handleSelectClass = (yogaClass: YogaClass) => {
    setSelectedClass(yogaClass);
  };

  const handleBookingSubmit = (time: string) => {
    if (selectedClass) {
      setBookingMessage(
        `You've successfully booked the ${selectedClass.name} class at ${time}!`
      );
      setSelectedClass(null); // Reset after booking
    }
  };

  return (
    <div>
      {!selectedClass ? (
        <ClassList classes={classes} onSelectClass={handleSelectClass} />
      ) : (
        <BookingForm
          yogaClass={selectedClass}
          onSubmitBooking={handleBookingSubmit}
        />
      )}

      {bookingMessage && <p>{bookingMessage}</p>}
    </div>
  );
};

export default Home;
