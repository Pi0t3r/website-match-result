const inputDay = document.querySelector(".day");
const inputDayWeek = document.querySelector(".day-week");
const elements = [
  document.querySelectorAll(".navigation"),
  document.querySelectorAll(".item"),
  document.querySelectorAll(".btn-filter"),
];
const previousDayBtn = document.querySelector("#previous-day");
const nextDayBtn = document.querySelector("#next-day");

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
const toggleArrow = document.querySelector(".togglingArrow");
let listMatches = document.querySelector(".list-matches");

function hideAndShowListMatch() {
  if (toggleArrow.classList.contains("fa-chevron-up")) {
    toggleArrow.classList.remove("fa-chevron-up");
    toggleArrow.classList.add("fa-chevron-down");
    listMatches.classList.remove("none");
  } else {
    toggleArrow.classList.remove("fa-chevron-down");
    toggleArrow.classList.add("fa-chevron-up");
    listMatches.classList.add("none");
  }
}
toggleArrow.addEventListener("click", hideAndShowListMatch);
nextDayBtn.addEventListener("click", setNextDay);
previousDayBtn.addEventListener("click", setPrevDay);
