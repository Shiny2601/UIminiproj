function validateForm() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUsername = "2301050036";
    const validPassword = "2301050036";

    if (username !== validUsername) {
        errorMessage.innerHTML = "Invalid username. Please try again.";
        errorMessage.style.color = "red";
        return false;
    }

    if (password !== validPassword) {
        errorMessage.innerHTML = "Invalid password. Please try again.";
        errorMessage.style.color = "red";
        return false;
    }

    window.location.href = "event-home.html";
    return false;
}
