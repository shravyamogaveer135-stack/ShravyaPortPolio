// Contact Form Validation

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check name
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    // Check email
    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Check message
    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    // Successful submission
    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    form.reset();
});