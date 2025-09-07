document.getElementById("signupForm").addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorText = document.getElementById("error");

  if (password !== confirmPassword) {
    event.preventDefault(); // Stop form from submitting
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
  }
});
