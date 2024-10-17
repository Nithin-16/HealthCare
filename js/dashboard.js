document.addEventListener("DOMContentLoaded", function () {
  const useridElement = document.getElementById("userid");

  // Fetch user data from localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.userid) {
    // Display the user ID
    useridElement.textContent = userData.userid;
  } else {
    // If no user data is found, redirect to login page
    window.location.href = "index.html";
  }
});
