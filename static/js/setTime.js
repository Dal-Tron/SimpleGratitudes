document.addEventListener("DOMContentLoaded", function(event) {
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
  const timeDay = document.querySelector(".time-day");
  const timeMonth = document.querySelector(".time-month");
  const timeYear = document.querySelector(".time-year");

  timeDay.innerHTML = weekday;

  setInterval(function() {
    myTimer();
  }, 1000);

  function myTimer() {
    const d = new Date();
  }
});
