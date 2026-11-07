
const navigationButtons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navigationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.page;

    pages.forEach(page => {
      page.classList.toggle("active", page.id === target);
    });

    navigationButtons.forEach(nav => {
      nav.classList.toggle("active", nav.dataset.page === target);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Our Time Together
const startDate = new Date(2025, 0, 1, 0, 0, 0);

function updateCounter() {
  const now = new Date();
  const difference = Math.max(0, now - startDate);
  const totalSeconds = Math.floor(difference / 1000);

  document.getElementById("days").textContent =
    Math.floor(totalSeconds / 86400);

  document.getElementById("hours").textContent =
    String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(totalSeconds % 60).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);
