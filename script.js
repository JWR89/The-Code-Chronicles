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
                window.location.href = `chapter${index + 1}.html`; // Redirect to specific chapter page
            });
        });
    }

    const returnButton = document.querySelector(".return-btn"); // "Return to Home" button
    if (returnButton) {
        returnButton.addEventListener("click", () => {
            window.location.href = "index.html"; // Back to landing page
        });
    }

    // Exercise: Check "Hello, World!" Answer (in Chapter 1)
    const checkAnswerButton = document.querySelector("#check-answer");
    if (checkAnswerButton) {
        checkAnswerButton.addEventListener("click", () => {
            const userInput = document.querySelector("#code-input").value.trim();
            const feedback = document.querySelector("#feedback");

            if (userInput === '"Hello, World!"') {
                feedback.textContent = "✅ Correct! Great job!";
                feedback.style.color = "lime";
            } else {
                feedback.textContent = "❌ Try again. Remember to use quotes around the text.";
                feedback.style.color = "red";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Navigation: Back to Chapters
    const returnButton = document.querySelector(".return-btn");
    if (returnButton) {
        returnButton.addEventListener("click", () => {
            window.location.href = "chapters.html";
        });
    }

    // Exercise 1: Hello, World!
    const helloCheckButton = document.querySelector("#hello-check");
    if (helloCheckButton) {
        helloCheckButton.addEventListener("click", () => {
            const userInput = document.querySelector("#hello-input").value.trim();
            const feedback = document.querySelector("#hello-feedback");

            if (userInput === '"Hello, World!"') {
                feedback.textContent = "✅ Correct! Great job!";
                feedback.style.color = "lime";
            } else {
                feedback.textContent = "❌ Try again. Remember to use quotes around the text.";
                feedback.style.color = "red";
            }
        });
    }

    // Exercise 2: Variables and Data Types
    const variableCheckButton = document.querySelector("#variable-check");
    if (variableCheckButton) {
        variableCheckButton.addEventListener("click", () => {
            const userInput = document.querySelector("#variable-input").value.trim();
            const feedback = document.querySelector("#variable-feedback");

            if (userInput === "25") {
                feedback.textContent = "✅ Correct! Variables store data like numbers or text.";
                feedback.style.color = "lime";
            } else {
                feedback.textContent = "❌ Try again. Make sure to assign the number 25.";
                feedback.style.color = "red";
            }
        });
    }

    // Exercise 3: Basic Arithmetic
    const arithmeticCheckButton = document.querySelector("#arithmetic-check");
    if (arithmeticCheckButton) {
        arithmeticCheckButton.addEventListener("click", () => {
            const userInput = document.querySelector("#arithmetic-input").value.trim();
            const feedback = document.querySelector("#arithmetic-feedback");

            if (userInput === "10 + 20" || userInput === "30") {
                feedback.textContent = "✅ Correct! Arithmetic is essential in programming.";
                feedback.style.color = "lime";
            } else {
                feedback.textContent = "❌ Try again. Remember, the sum of 10 and 20 is 30.";
                feedback.style.color = "red";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Hello, World!
    const challenge1Check = document.querySelector("#challenge1-check");
    if (challenge1Check) {
        challenge1Check.addEventListener("click", () => {
            const userInput = document.querySelector("#challenge1-input").value.trim();
            const feedback = document.querySelector("#challenge1-feedback");

            if (userInput === '"Hello, World!"') {
                feedback.textContent = "✅ Correct! Moving to the next challenge...";
                feedback.style.color = "lime";
                setTimeout(() => {
                    window.location.href = "challenge2.html"; // Redirect to Challenge 2
                }, 1500);
            } else {
                feedback.textContent = "❌ Incorrect! Remember to use double quotes.";
                feedback.style.color = "red";
            }
        });
    }
});