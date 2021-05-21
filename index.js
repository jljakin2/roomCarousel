// CAROUSEL ========>
const track = document.querySelector(".track");
const slides = Array.from(track.children);

const nextBtn = document.querySelector(".btn--right");
const prevBtn = document.querySelector(".btn--left");

const slideWidth = slides[0].getBoundingClientRect().width;
const slideWidthRem = slideWidth / 12;

const addSlide = (slide, index) => {
  /**
   * Function that is used with forEach loop to take each slide in the
   * slides array and move them next to each other horizontally. It takes
   * the width of each slide and multiplies it by the index the slide is in
   * in order to keep moving the slides out as we add slides.
   */
  slide.style.left = slideWidthRem * index + "rem";
};

const moveSlide = (track, currentSlide, targetSlide) => {
  /**
   * Function that takes the whole carousel track and moves it
   * to the left/right based on the width of the current slide
   */
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

slides.forEach(addSlide);

nextBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveSlide(track, currentSlide, nextSlide);
});

window.addEventListener("keydown", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const prevSlide = currentSlide.previousElementSibling;

  if (e.key === "ArrowLeft") {
    moveSlide(track, currentSlide, prevSlide);
  } else if (e.key === "ArrowRight") {
    moveSlide(track, currentSlide, nextSlide);
  }
});

prevBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveSlide(track, currentSlide, prevSlide);
});

// MOBILE MENU =========>
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navContainer = document.querySelector(".nav-container");
const blackout = document.querySelector(".blackout");

hamburger.addEventListener("click", () => {
  navContainer.classList.add("mobile-move-down");
  navContainer.classList.remove("mobile-move-up");
  blackout.style.display = "block";
});

close.addEventListener("click", () => {
  navContainer.classList.add("mobile-move-up");
  navContainer.classList.remove("mobile-move-down");
  blackout.style.display = "none";
});
