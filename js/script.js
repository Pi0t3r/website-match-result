const inputDay = document.querySelector(".day");
const inputDayWeek = document.querySelector(".day-week");
const elements = [
  document.querySelectorAll(".navigation"),
  document.querySelectorAll(".btn-filter"),
];
const previousDayBtn = document.querySelector("#previous-day");
const nextDayBtn = document.querySelector("#next-day");
const toggleNameTheme = document.querySelector("#toggleNameTheme");
const btnTheme = document.querySelector("#switch-round");

let day = new Date();
elements.forEach((items) => {
  const toggle = (e) => {
    items.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  items.forEach((item) => item.addEventListener("click", toggle));
});

function setDay() {
  if (day.getDate() < 10) {
    inputDay.innerHTML = `0${day.getDate()}/ ${day.getMonth() + 1}`;
  } else {
    inputDay.innerHTML = `${day.getDate()}/ ${day.getMonth() + 1}`;
  }
}
setDay();

function switchDay() {
  const options = { weekday: "short" };
  let stringDate = day.toLocaleDateString("pl-PL", options).toString();
  stringDate = stringDate.slice(0, 2).toUpperCase();
  inputDayWeek.innerHTML = stringDate;
}
switchDay();
function getPreviousDay() {
  day.setDate(day.getDate() - 1);
}
function getNextDay() {
  day.setDate(day.getDate() + 1);
}

function setPrevDay() {
  switchDay();
  setDay();
  getPreviousDay();
}
function setNextDay() {
  switchDay();
  setDay();
  getNextDay();
}



function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
});

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    toggleNameTheme.innerHTML = "jasny";
  } else {
    setTheme("theme-dark");
    toggleNameTheme.innerHTML = "ciemny";
  }
}


btnTheme.addEventListener("click", toggleTheme);
nextDayBtn.addEventListener("click", setNextDay);
previousDayBtn.addEventListener("click", setPrevDay);
