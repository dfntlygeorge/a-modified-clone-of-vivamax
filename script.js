document.addEventListener("DOMContentLoaded", () => {
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

  // Get all the FAQs
  const faqs = document.querySelectorAll(".faq");

  // Add click event listener to each FAQ
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

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
    document.body.classList.add("scrollable"); // Restore scrolling
  });

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  // Call scrollToTop function when the page is being unloaded (before reload)
  window.onbeforeunload = scrollToTop;
});
