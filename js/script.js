const navigations = document.querySelectorAll(".navigation");
const sports = document.querySelectorAll(".item");

const resultsAndNewsToggleClass = (e) => {
  navigations.forEach((element) => {
    element.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

navigations.forEach((el) => {
  el.addEventListener("click", resultsAndNewsToggleClass);
});

const sportsToggleClass = (e) => {
  sports.forEach((element) => {
    element.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

sports.forEach((el) => {
  el.addEventListener("click", sportsToggleClass);
});
