let dots = document.querySelectorAll(".dot");
let index = 0;

function changeSlide() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  index = (index + 1) % dots.length;
}

// Automatic slide every 3 seconds
setInterval(changeSlide, 3000);

// Click to change slide manually
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
    index = i;
  });
});
