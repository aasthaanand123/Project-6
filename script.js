let buttons = document.querySelectorAll(".card__btn");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
buttons.forEach((b) =>
  b.addEventListener("click", function () {
    section1.classList.toggle("hide");
    section2.classList.toggle("hide");
  })
);
document.addEventListener("keydown", function (e) {
  section1.classList.toggle("hide");
  section2.classList.toggle("hide");
});
