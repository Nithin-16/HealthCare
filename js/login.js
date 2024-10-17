document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  } else if (loginBtn) {
    loginBtn.addEventListener("click", handleLogin);
  }

  function handleLogin(event) {
    event.preventDefault();
    const userid = document.querySelector('input[name="userid"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Here you would typically send these credentials to your server
    console.log("Login attempted with:", userid, password);

    // Simulating a successful login
    const userData = {
      userid: userid,
      // Add any other user data you want to store
    };

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to dashboard
    window.location.href = "dashboard.html";

    // TODO: Implement actual login logic with server-side authentication
    // Example:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ userid, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         localStorage.setItem('userData', JSON.stringify(data.userData));
    //         window.location.href = 'dashboard.html';
    //     } else {
    //         alert('Login failed: ' + data.message);
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('An error occurred during login.');
    // });
  }
});
