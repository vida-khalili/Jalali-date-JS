let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

let months = new Array(
  "",
  "فروردين",
  "ارديبهشت",
  "خرداد",
  "تير",
  "مرداد",
  "شهريور",
  "مهر",
  "آبان",
  "آذر",
  "دي",
  "بهمن",
  "اسفند"
);

console.log(new Date().toLocaleString("fa-IR", options));

let currentDate = new Date()
  .toLocaleString("fa-IR", options)
  .replace(",", "")
  .split(" ");

console.log(currentDate);

let weekday = currentDate[3];
let day = currentDate[2];
let month = currentDate[1];
let year = currentDate[0];

document.getElementById("weekday").innerHTML = weekday;
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;

function getDate() {
  let inputDate = date_value.value.split("-");
  console.log("input date: ", inputDate);
  let inputDay = inputDate[2];
  let inputMonth = inputDate[1];
  let inputYear = inputDate[0];

  let persianDate = moment(`${inputYear}/${inputMonth}/${inputDay}`)
    .locale("fa")
    .format("YYYY/M/D")
    .split("/");
  console.log("persianDate: ", persianDate);
  let persianDay = persianDate[2];
  let persianMonth = months[persianDate[1]];
  let persianYear = persianDate[0];
  document.querySelector(".convert-subtitle").innerHTML =
    "تاریخ انتخابی شما معادل است با:";
  document.getElementById("persian-day").innerHTML = persianDay;
  document.getElementById("persian-month").innerHTML = persianMonth;
  document.getElementById("persian-year").innerHTML = persianYear;
}

const date_value = document.getElementById("date-input");
date_value.addEventListener("change", getDate);
