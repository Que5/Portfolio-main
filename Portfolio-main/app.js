const burger = document.querySelector(".navbar-toggler");
const ul = document.querySelector(".navbar-nav");

// Hamburger menu function
burger.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
const scrollUpButton = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
});

scrollUpButton.addEventListener("click", () => {
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
  document.querySelector('#textname').value = '';
}


function submitForm() {
  // Validate the form
  if (!validateForm()) {
    return; // Abort submission if validation fails
  }

  // Get form values
  document.querySelector('input[name="fname"]').value;
  document.querySelector('input[type="email"]').value;
  document.querySelector('#textname').value;

  // Set up template parameters
  var templateParams = {
    from_name: fname,
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