import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import "../App.css";
import CalendarBody from "./CalendarBody";

const Calendar = () => {
  const monthsArr = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const curYear = new Date().getFullYear();
  const curMonth = new Date().getMonth();
  const curDay = new Date().getDate();

  const [month, setMonth] = useState(curMonth);
  const [year, setYear] = useState(curYear);

  const increMonth = (e) => {
    e.preventDefault();
    if (month !== 11) {
      setMonth(month + 1);
    } else {
      setMonth((month) => month - 11);
      setYear((year) => year + 1);
    }
  };
  const decreMonth = (e) => {
    e.preventDefault();
    if (month !== 0) {
      setMonth(month - 1);
    } else {
      setMonth((month) => month + 11);
      setYear((year) => year - 1);
    }
  };
  return (
    <div>
      <div className="calendarContainer">
        <div className="calendarHeader">
          <button
            onClick={() => {
              setMonth(curMonth);
              setYear(curYear);
            }}
          >
            Today
          </button>
          <div className="months">
            <button onClick={decreMonth}>
              <AiOutlineLeft />
            </button>
            <div>
              <span>
                {monthsArr[month]} {year}{" "}
              </span>
            </div>
            <button onClick={increMonth}>
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <CalendarBody month={month} year={year} curDay={curDay} />
      </div>
    </div>
  );
};

export default Calendar;
