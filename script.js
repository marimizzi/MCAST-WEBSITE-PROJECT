const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides= slides.children.length;
let index = 0;

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
  resetAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
  resetAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
});

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

let autoSlide = setInterval(nextSlide, 4000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 4000);
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


