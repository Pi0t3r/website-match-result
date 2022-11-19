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
const toggleArrow1 = document.querySelector(".togglingArrowPremier");
const toggleArrow2 = document.querySelector(".togglingArrowSpain");
const toggleArrow3 = document.querySelector(".togglingArrowItaly");
let listMatchesPremier = document.querySelector("#england");
let listMatchesLaliga = document.querySelector("#spain");
let listMatchesSeriea = document.querySelector("#italy");
function hideAndShowListMatch1() {
  if (toggleArrow1.classList.contains("fa-chevron-up")) {
    toggleArrow1.classList.remove("fa-chevron-up");
    toggleArrow1.classList.add("fa-chevron-down");
    listMatchesPremier.classList.remove("none");
  } else {
    toggleArrow1.classList.remove("fa-chevron-down");
    toggleArrow1.classList.add("fa-chevron-up");
    listMatchesPremier.classList.add("none");
  }
}
function hideAndShowListMatch2() {
  if (toggleArrow2.classList.contains("fa-chevron-up")) {
    toggleArrow2.classList.remove("fa-chevron-up");
    toggleArrow2.classList.add("fa-chevron-down");
    listMatchesLaliga.classList.remove("none");
  } else {
    toggleArrow2.classList.remove("fa-chevron-down");
    toggleArrow2.classList.add("fa-chevron-up");
    listMatchesLaliga.classList.add("none");
  }
}
function hideAndShowListMatch3() {
  if (toggleArrow3.classList.contains("fa-chevron-up")) {
    toggleArrow3.classList.remove("fa-chevron-up");
    toggleArrow3.classList.add("fa-chevron-down");
    listMatchesSeriea.classList.remove("none");
  } else {
    toggleArrow3.classList.remove("fa-chevron-down");
    toggleArrow3.classList.add("fa-chevron-up");
    listMatchesSeriea.classList.add("none");
  }
}

toggleArrow1.addEventListener("click", hideAndShowListMatch1);
toggleArrow2.addEventListener("click", hideAndShowListMatch2);
toggleArrow3.addEventListener("click", hideAndShowListMatch3);
nextDayBtn.addEventListener("click", setNextDay);
previousDayBtn.addEventListener("click", setPrevDay);
