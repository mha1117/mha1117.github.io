let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let months = [
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
    "December",
  ];
  
  let today = new Date();
  let dayName = days[today.getDay()];
  let monthName = months[today.getMonth()];
  let year = today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  let fullDate = dayName + ", " + monthName + " " + today.getDate() + ", " + year + "," + time;
  
  document.getElementById("currentDateAndTime").textContent = fullDate;
  document.getElementById("currentYear").textContent = year;