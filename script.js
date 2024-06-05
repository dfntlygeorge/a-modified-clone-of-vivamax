// Get all the buttons
const buttons = document.querySelectorAll(".plan-btn");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => {
      btn.querySelector(".underline").classList.remove("active-btn");
      btn.style.opacity = "0.7";
    });

    // Add active class to the clicked button
    button.querySelector(".underline").classList.add("active-btn");
    button.style.opacity = "1";
  });
});
