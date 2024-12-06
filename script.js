document.addEventListener("DOMContentLoaded", () => {
  // Dynamic tagline (for both landing page and chapters page)
  const taglines = [
      "Master Code, Forge Skills",
      "Choose Your Adventure",
      "Explore and Conquer",
      "Write, Debug, Conquer",
      "Your Journey to Code Awaits"
  ];
  const taglineElement = document.querySelector(".tagline");
  if (taglineElement) {
      const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
      taglineElement.textContent = randomTagline;
  }

  // Landing Page Buttons
  const startButton = document.querySelector(".cta-btn"); // "Start" button
  if (startButton) {
      startButton.addEventListener("click", () => {
          window.location.href = "chapters.html"; // Redirect to Chapters page
      });
  }

  const signInButton = document.querySelector(".auth-btn:nth-child(1)"); // "Sign In" button
  if (signInButton) {
      signInButton.addEventListener("click", () => {
          alert("Sign-In feature coming soon!");
      });
  }

  const registerButton = document.querySelector(".auth-btn:nth-child(2)"); // "Register" button
  if (registerButton) {
      registerButton.addEventListener("click", () => {
          alert("Register feature coming soon!");
      });
  }

  // Chapters Page Buttons
  const chapterButtons = document.querySelectorAll(".chapter-btn"); // Chapter selection buttons
  if (chapterButtons.length > 0) {
      chapterButtons.forEach((button, index) => {
          button.addEventListener("click", () => {
              alert(`Loading Chapter ${index + 1}...`); // Placeholder action for now
          });
      });
  }

  const returnButton = document.querySelector(".return-btn"); // "Return to Home" button
  if (returnButton) {
      returnButton.addEventListener("click", () => {
          window.location.href = "index.html"; // Back to landing page
      });
  }
});