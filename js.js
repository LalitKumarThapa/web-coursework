function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    fetch("php/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${username}&password=${password}`
    }).then(res => res.text()).then(data => {
        if (data === "success") alert("Account Created Successfully!");
        else alert("Registration Failed");
    });
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    fetch("php/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${username}&password=${password}`
    }).then(res => res.text()).then(data => {
        if (data === "success") window.location.href = "dashboard.html";
        else alert("Invalid Credentials");
    });
}
