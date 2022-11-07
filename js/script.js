const navigations = document.querySelectorAll(".navigation");
const sports = document.querySelectorAll(".item");
const btnFilter = document.querySelectorAll(".btn-filter");

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

const btnFilterTogglingClass = (e) => {
  btnFilter.forEach((element) => {
    element.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

btnFilter.forEach((el) => {
  el.addEventListener("click", btnFilterTogglingClass);
});

let picker = $("#test")
  .pickadate({
    format: "dd/mm",
  })
  .pickadate("picker");

$("#previous-day,#next-day").click(function (e) {
  e.preventDefault();
  setInterval($(this).data('diff'))
});
