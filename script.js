const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${index * 100}vw)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % dots.length;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + dots.length) % dots.length;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

