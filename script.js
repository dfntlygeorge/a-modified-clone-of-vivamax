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

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Check if the clicked FAQ is already active
    const isActive = faq.classList.contains("active");

    // Remove active class from all FAQs
    faqs.forEach((item) => {
      item.classList.remove("active");
    });

    // If the clicked FAQ was not active, activate it
    if (!isActive) {
      faq.classList.add("active");
    }
  });
});
