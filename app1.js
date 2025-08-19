// Slider logic
const slides = document.querySelectorAll(".slide");
let idx = 0;
setInterval(() => {
  slides[idx].classList.remove("active");
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add("active");
}, 3500);

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeLabel = document.getElementById("darkModeLabel");
const body = document.body;

// Load dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeBtn.querySelector("i").classList.remove("fa-moon");
  darkModeBtn.querySelector("i").classList.add("fa-sun");
  darkModeLabel.textContent = "Mode Default";
} else {
  darkModeLabel.textContent = "Dark Mode";
}

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  darkModeBtn.querySelector("i").classList.toggle("fa-moon");
  darkModeBtn.querySelector("i").classList.toggle("fa-sun");
  darkModeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
});
