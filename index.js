setInterval(() => {
  let time = document.querySelector("#time");
  let dayUp = document.querySelector(".day");
  let dateUp = document.querySelector(".date");
  let monthUp = document.querySelector(".month");
  let yearUp = document.querySelector(".year");

  //Current Time
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day_night = "AM";

  //Day,Date,Month,Year
  let day = date.getDay();
  let currentDate = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  //Current Time
  if (hour > 12) {
    hour = hour - 12;
    day_night = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  //Function for word day date
  function dayFnc() {
    let dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayName[day];
  }

  function monthFnc() {
    let monthName = [
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
    return monthName[month];
  }

  //Displaying
  time.innerHTML = hour + ":" + minute + ":" + second + " " + day_night;
  dayUp.innerHTML = dayFnc();
  dateUp.innerHTML = currentDate;
  monthUp.innerHTML = monthFnc();
  yearUp.innerHTML = year;
}, 1000);
