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
  switch (day.getDay()) {
    case 1:
      inputDayWeek.innerHTML = "PO";
      break;
    case 2:
      inputDayWeek.innerHTML = "WT";
      break;
    case 3:
      inputDayWeek.innerHTML = "ŚR";
      break;
    case 4:
      inputDayWeek.innerHTML = "CZ";
      break;
    case 5:
      inputDayWeek.innerHTML = "PT";
      break;
    case 6:
      inputDayWeek.innerHTML = "SO";
      break;
    case 0:
      inputDayWeek.innerHTML = "NI";
      break;
  }
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
nextDayBtn.addEventListener("click", setNextDay);
previousDayBtn.addEventListener("click", setPrevDay);





