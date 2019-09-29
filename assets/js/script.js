const nextSlide = document.querySelector(".nextSlide");
const previousSlide = document.querySelector(".previousSlide");
const images = document.querySelectorAll("li");
const button = document.querySelector("button");
let i = 0;

function scrollingNext() {
  images[i].classList.remove("active");
  i++;
  if (i >= document.images.length) {
    i = 0;
  }
  images[i].classList.add("active");
}
