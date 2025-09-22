// Form element
const formular = document.querySelector(".membership-form");

if (formular instanceof HTMLFormElement) {
  // Prevent default submit action
  formular.addEventListener("submit", (e: Event) => {
    e.preventDefault();
  });
}

// Arrow button element
const arrowButton = document.getElementById("arrow-btn");

if (arrowButton instanceof HTMLButtonElement) {
  // Toggle button visibility based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      arrowButton.style.display = "block";
    } else {
      arrowButton.style.display = "none";
    }
  });

  // Scroll to top smoothly on click
  arrowButton.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}
