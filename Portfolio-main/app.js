
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
const scrollUpButton = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) { /* Show the button when the user has scrolled down 500 pixels */
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function validateForm() {
  const fnameInput = document.querySelector('input[name="fname"]');
  const emailInput = document.querySelector('input[type="email"]');

  // Validate First Name
  if (fnameInput.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Please enter your first name.';
    return false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    return false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // All fields are valid
  return true;
}

function resetForm() {
  document.querySelector('input[name="fname"]').value = '';
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('.rectangle-27').value = '';
}

function submitForm() {
  // Validate the form
  if (!validateForm()) {
    return; // Abort submission if validation fails
  }

  // Get form values
  var name = document.getElementsByName('fname')[0].value;
  var email = document.getElementsByClassName('rectangle-25')[0].value;
  var message = document.getElementsByClassName('rectangle-27')[0].value;

  // Set up template parameters
  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send('service_x3b2pwi', 'template_u6s7cgh', templateParams)
    .then(function (response) {
      console.log('Email successfully sent!', response.status, response.text);
      // Add any success message or redirect logic here
      resetForm(); // Clear the form after successful submission
    })
    .catch(function (error) {
      console.error('Email sending failed:', error);
      // Add any error handling logic here
    });
}