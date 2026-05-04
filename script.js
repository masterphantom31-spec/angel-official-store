function openMenu(){
  document.getElementById("sidebar").style.left="0";
  document.getElementById("overlay").style.display="block";
}

function closeMenu(){
  document.getElementById("sidebar").style.left="-250px";
  document.getElementById("overlay").style.display="none";
}

/* 🔥 BANNER */
let index = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

function updateSlide() {
  if (!slides) return;

  slides.style.transform = "translateX(-" + index * 100 + "%)";

  dots.forEach(d => d.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

setInterval(() => {
  if (!slides) return;
  index = (index + 1) % dots.length;
  updateSlide();
}, 3000);


// WHATSAPP POPUP AUTO SHOW
setTimeout(() => {
  const popup = document.getElementById("waPopup");
  if (popup) {
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  }
}, 2000);
