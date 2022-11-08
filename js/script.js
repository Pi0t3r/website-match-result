const inputDay = document.querySelector(".day");
const inputDayWeek = document.querySelector(".day-week");
const elements = [
  document.querySelectorAll(".navigation"),
  document.querySelectorAll(".item"),
  document.querySelectorAll(".btn-filter"),
];

elements.forEach((items) => {
  const toggle = (e) => {
    items.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  items.forEach((item) => item.addEventListener("click", toggle));
});

// const daysWeek = {
//   0: "PO",
//   1: "WT",
//   2: "ŚR",
//   3: "CZ",
//   4: "PT",
//   5: "SO",
//   6: "NI",
//   // { 0: "PO" },
//   // { 1: "WT" },
//   // { 2: "ŚR" },
//   // { 3: "CZ" },
//   // { 4: "PT" },
//   // { 5: "SO" },
//   // { 6: "NI" },
// };



const day = new Date();
let date = day.getDate();
let month = day.getMonth();
let time = day.getTime();
let currentDay = day.getDay()
console.log(currentDay)
function switchDay() {
  switch (currentDay) {
    case 1:
      inputDayWeek.innerHTML = 'PO'
      break;
    case 2:
      inputDayWeek.innerHTML = 'WT'
      break;
    case 3:
      inputDayWeek.innerHTML = 'ŚR'
      break;
    case 4:
      inputDayWeek.innerHTML = 'CZ'
      break;
    case 5:
      inputDayWeek.innerHTML = 'PT'
      break;
    case 6:
      inputDayWeek.innerHTML = 'SO'
      break;
    case 7:
      inputDayWeek.innerHTML = 'NI'
      break;
  }
}
switchDay()
function setDay() {
  if (day.getDate() < 10) {
    inputDay.innerHTML = `0${day.getDate()}/ ${day.getMonth()}`;
    // inputDay.innerHTML = 'siema'
  } else {
    inputDay.innerHTML = `${day.getDate()}/ ${day.getMonth()}`;
    // inputDay.innerHTML = 'siema'
  }
}
setDay();

function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);
}
