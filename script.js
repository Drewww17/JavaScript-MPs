function checkEmail() {
    const email = document.getElementById("email").value.trim();
    const output = document.getElementById("email-output");

    if (email.includes("@")) {
        output.value = "Valid";
    } else {
        output.value = "Invalid";
    }
}
