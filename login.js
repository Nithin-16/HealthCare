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

    // Placeholder: show an alert instead of actual login logic
    alert("Login attempt registered. Actual authentication would happen here.");

    // TODO: Implement actual login logic
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
    //         window.location.href = '/dashboard';
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
