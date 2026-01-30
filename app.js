//JavaScript Assignment (31-34)
//Start Of The Chapter (31)
//TOPIC (DATE METHODS)
//Chapter Name (Getting the current date and time)
// Chapter 31 Q (01)
let date = new Date();
function showCurrentDate() {
  document.getElementById("headone").innerHTML = "<h2>Current Date</h2>";
  document.getElementById("firstone").innerHTML =
    "Current Date: " + date + "<br>";
}
// Chapter 31 Q (02)
function showCurrentMonth() {
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
  monthName = monthName[date.getMonth()];
  alert("Current month: " + monthName);
}
// Chapter 31 Q (03)
function showDayOfWeek() {
  let weekName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  weekName = weekName[date.getDay()].slice(0, 3);
  alert("Today is: " + weekName);
}
// Chapter 31 Q (04)
function checkFunDay() {
  document.getElementById("headfour").innerHTML = "<h2>Students Fun day</h2>";
  if (date.getDay() === 0 || date.getDay() === 6) {
    document.getElementById("fourone").innerHTML = "It's Fun day." + "<br>";
  } else {
    document.getElementById("fourone").innerHTML = "Not a Fun day." + "<br>";
  }
}
//End Of the Chapter (31)

//Start Of The Chapter (32)
//Chapter Name (Extracting parts of the date and time)
// Chapter 32 Q (01)
function showDayOfMonth() {
  let firstdaysMonth = date.getDate() < 16;
  document.getElementById("headfive").innerHTML =
    "<h2>Check days of month</h2>";
  if (firstdaysMonth) {
    document.getElementById("fiveone").innerHTML =
      "First fifteen days of the month." + "<br>";
  } else {
    document.getElementById("fiveone").innerHTML =
      "Last days of the month." + "<br>";
  }
}
// Chapter 32 Q (02)
function showElapsedTime() {
  let elpapsedTime = (11, 5, 2015);
  let totalMilliSec = date.getTime();
  let minutes = Math.floor(totalMilliSec / (1000 * 60));
  document.getElementById("headsix").innerHTML = "<h2>Elapsed time</h2>";
  document.getElementById("sixone").innerHTML =
    "Current Date: " + date + "<br>";
  document.getElementById("sixtwo").innerHTML =
    "Elapsed milliseconds since January 1, 1970: " + totalMilliSec + "<br>";
  document.getElementById("sixthree").innerHTML =
    "Elapsed minutes since January 1, 1970: " + minutes + "<br>";
}
// Chapter 32 Q (03)
function checkAMPM() {
  if (date.getHours() < 12) {
    alert("It's AM");
  } else {
    alert("It's PM");
  }
}
// Chapter 32 Q (04)
function showLateDate() {
  let lateDate = new Date(2020, 11, 31);
  document.getElementById("headeight").innerHTML = "<h2>Late date</h2>";
  document.getElementById("eightone").innerHTML =
    "Late date: " + lateDate + "<br>";
}
//End Of the Chapter (32)

//Start Of The Chapter (33)
//Chapter Name (Specifying a date and time)
// Chapter 33 Q (01)
function showDaysPast() {
  let ramadanStart = new Date(2026, 1, 18);
  let pastDate = Math.floor((date - ramadanStart) / (1000 * 60 * 60 * 24));
  document.getElementById("headnine").innerHTML = "<h2>Days past</h2>";
  if (pastDate < 0) {
    document.getElementById("nineone").innerHTML =
      `Ramadan hasn't start yet ${Math.abs(pastDate)} days remaining. <br>`;
  } else {
    document.getElementById("nineone").innerHTML =
      `${Math.abs(pastDate)} days have passed since 1st Ramadan, 2026. <br>`;
  }
}
// Chapter 33 Q (02)
function showElapsedSeconds() {
  let onReferenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
  let time = new Date("January 1, 2015 00:00:00 GMT+0500 (PKT)");
  let pastSec = Math.floor((onReferenceDate - time) / 1000);
  document.getElementById("headten").innerHTML = "<h2>Elapsed seconds</h2>";
  document.getElementById("tenone").innerHTML =
    `On reference date: ${onReferenceDate}<br>`;
  document.getElementById("tentwo").innerHTML =
    `${pastSec} seconds had passed since beginning of 2015.<br>`;
}
// Chapter 33 Q (03)
function showHourAgo() {
  let previous1Hour = new Date(date.getTime());
  previous1Hour.setHours(date.getHours() - 1);
  document.getElementById("headeleven").innerHTML = "<h2>Hour Ago</h2>";
  document.getElementById("elevenone").innerHTML = `Current date: ${date} <br>`;
  document.getElementById("eleventwo").innerHTML =
    `1 hour ago, it was: ${previous1Hour} <br>`;
}
//End Of the Chapter (33)

//Start Of The Chapter (34)
//Chapter Name (Changing elements of a date and time)
// Chapter 34 Q (01)
function showYearBack() {
  let previous100Hour = new Date(date.getTime());
  previous100Hour.setFullYear(date.getFullYear() - 100);
  document.getElementById("headtwelve").innerHTML = "<h2>100 years back</h2>";
  document.getElementById("twelveone").innerHTML = `Current date: ${date} <br>`;
  document.getElementById("twelvetwo").innerHTML =
    `100 years back, it was: ${previous100Hour} <br>`;
}
// Chapter 34 Q (02)
function showAge() {
  let userInputAge = parseInt(prompt("Enter your birthday year:"));
  let age = new Date().getFullYear() - userInputAge;
  if (age) {
    alert(
      "Your age is: " +
        age +
        " years old" +
        "\nYour birthday year is: " +
        userInputAge,
    );
  } else {
    alert("Invalid birthday year!!");
  }
}
// Chapter 34 Q (03)
function showElectricityBill() {
  let customerName = "ABC Customer";
  let month_Name = [
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
  let mONTH = month_Name[date.getMonth()];
  let unit = 410;
  let chargesPerUnit = 16.0;
  let latePaymentSurCharge = 350.0;
  let netAmount = unit * chargesPerUnit;
  let grossAmount = netAmount + latePaymentSurCharge;
  chargesPerUnit = chargesPerUnit.toFixed(2);
  netAmount = netAmount.toFixed(2);
  grossAmount = grossAmount.toFixed(2);
  document.getElementById("headfourteen").innerHTML =
    "<h2>K-Electric Bill</h2>";
  document.getElementById("fourteenone").innerHTML =
    `Customer Name: <strong>${customerName}</strong> <br>`;
  document.getElementById("fourteentwo").innerHTML =
    `Month: <strong>${mONTH}</strong> <br>`;
  document.getElementById("fourteenthree").innerHTML =
    `Number of units: <strong>${unit}</strong> <br>`;
  document.getElementById("fourteenfour").innerHTML =
    `Charges per unit: <strong>${chargesPerUnit}</strong> <br>`;
  document.getElementById("fourteenfive").innerHTML =
    `Net Amount Payable (within Due Date): <strong>${netAmount}</strong> <br>`;
  document.getElementById("fourteensix").innerHTML =
    `Late payment surcharge: <strong>${latePaymentSurCharge.toFixed(2)}</strong> <br>`;
  document.getElementById("fourteenseven").innerHTML =
    `Gross Amount Payable (After due date): <strong>${grossAmount}</strong> <br>`;
}
//End Of the Chapter (34)
