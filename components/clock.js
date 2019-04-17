function Clock(props) {
  const date = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const intDay = date.getDate();
  const year = date.getFullYear();
  const fullDateString = `${month} ${intDay}, ${year}`;

  return (
    <div className="time-container">
      <div className="time-weekday">{weekday}</div>
      <div className="time-month-day-year">{fullDateString}</div>
      <div className="time-hour">{props.time}</div>
      <style jsx>{`
        .time-container {
          font-family: CodyStarLight;
          text-align: center;
          color: white;
          font-size: 1.5rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

export default Clock