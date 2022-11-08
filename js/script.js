const navigations = document.querySelectorAll(".navigation");
const sports = document.querySelectorAll(".item");
const btnFilter = document.querySelectorAll(".btn-filter");

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
