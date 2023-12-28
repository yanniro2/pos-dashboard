"use client";
import React, { useState } from "react";

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay();

  const renderCalendar = () => {
    const calendar = [];
    let dayCount = 1;

    // Render previous month's days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        -i
      ).getDate();
      calendar.push(
        <div key={`prev-${i}`} className="bg-skin-dark text-gray-600">
          {day}
        </div>
      );
    }

    // Render current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDate =
        day === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();

      calendar.push(
        <div
          key={day}
          className={`calendar-day ${
            isCurrentDate
              ? "bg-primary text-white font-semibold rounded-lg"
              : " bg-skin-light text-skin-base rounded-lg"
          }`}>
          {day}
        </div>
      );
      dayCount++;
    }

    // Render next month's days
    for (let i = 1; dayCount <= 42; i++) {
      const day = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      ).getDate();
      calendar.push(
        <div
          key={`next-${i}`}
          className="bg-skin-dark text-gray-600 rounded-lg">
          {day}
        </div>
      );
      dayCount++;
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="bg-skin-medium p-3 rounded-lg h-min">
      <div className="flex justify-between items-center mb-4 px-4">
        <button
          onClick={handlePrevMonth}
          className="text-skin-base hover:text-primary transition-all cursor-pointer">
          &lt;
        </button>
        <h2 className="text-xl font-bold text-primary">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-skin-base hover:text-primary transition-all cursor-pointer">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 w-full font-semibold">
        <div className="text-center text-skin-base p-2">Sun</div>
        <div className="text-center text-skin-base p-2">Mon</div>
        <div className="text-center text-skin-base p-2">Tue</div>
        <div className="text-center text-skin-base p-2">Wed</div>
        <div className="text-center text-skin-base p-2">Thu</div>
        <div className="text-center text-skin-base p-2">Fri</div>
        <div className="text-center text-skin-base p-2">Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center ">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default DateComponent;
