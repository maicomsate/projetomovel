function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "Phone number or Email" || password === "Password") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}