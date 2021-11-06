import React from "react";
import "../App.css";
const CalendarBody = ({ month, year, curDay }) => {
  let fstDate = new Date(year, month, 1).getDate(); // first date of the month
  let lstDate = new Date(year, month + 1, 0).getDate(); // last date of the month
  let fstDay = new Date(year, month, 1).getDay(); // first day of the month
  let nstDay = new Date(year, month + 1, 1).getDay();
  let prevLstDay = new Date(year, month, 0).getDay(); // last day of the prev-month
  let prevLstDate = new Date(year, month, 0).getDate(); // last date of the prev-month

  // array for the first week days
  const firstWdays = [];
  //array for the last month days
  const prevDays = [];
  if (prevLstDay !== 6) {
    for (let i = 0; i < prevLstDay + 1; i++) {
      prevDays.unshift(prevLstDate - i);
    }
  }

  for (let dayNum = 1; dayNum < 8 - nstDay; dayNum++) {
    if (dayNum === 0) {
      return firstWdays;
    }
    firstWdays.push(dayNum); //push to the days[]
  }

  let daysofMonth = [];
  for (let j = 1; j < lstDate + 1; j++) {
    daysofMonth.push(j);
  }
  const totalDays = prevDays.concat(daysofMonth).concat(firstWdays);

  function division(arr, size) {
    var i,
      j,
      temparray = [],
      chunk = size;
    for (i = 0, j = arr.length; i < j; i += chunk) {
      temparray.push(arr.slice(i, i + chunk));
    }
    return temparray;
  }
  let data = division(totalDays, 7);

  return (
    <div>
      <table className="calTable">
        <colgroup span="7" class="columns"></colgroup>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wen</th>
          <th>Thur</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>

        <tr>
          {data[0].map((date) => {
            return date > 20 ? (
              <td className="prev">{date}</td>
            ) : curDay === date ? (
              <td className="active">{date}</td>
            ) : (
              <td>{date}</td>
            );
          })}
        </tr>
        <tr>
          {data[1].map((date) => {
            return curDay === date ? (
              <td className="active">{date}</td>
            ) : (
              <td>{date}</td>
            );
          })}
        </tr>
        <tr>
          {data[2].map((date) => {
            return curDay === date ? (
              <td className="active">{date}</td>
            ) : (
              <td>{date}</td>
            );
          })}
        </tr>
        <tr>
          {data[3].map((date) => {
            return curDay === date ? (
              <td className="active">{date}</td>
            ) : (
              <td>{date}</td>
            );
          })}
        </tr>
        <tr>
          {data[4].map((date) => {
            return date < 10 ? (
              <td className="prev">{date}</td>
            ) : curDay === date ? (
              <td className="active">{date}</td>
            ) : (
              <td>{date}</td>
            );
          })}
        </tr>
        {data[5] ? (
          <tr>
            {data[5].map((date) => {
              return date < 10 ? (
                <td className="prev">{date}</td>
              ) : curDay === date ? (
                <td className="active">{date}</td>
              ) : (
                <td>{date}</td>
              );
            })}
          </tr>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};

export default CalendarBody;
