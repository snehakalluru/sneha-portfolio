const themeToggle = document.querySelector("#theme-toggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");
const toggleText = themeToggle.querySelector(".toggle-text");
const storedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const isDark = theme === "dark";
  toggleIcon.textContent = isDark ? "☼" : "☾";
  toggleText.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

applyTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});
