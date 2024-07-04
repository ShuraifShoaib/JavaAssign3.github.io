// Take username and password from user
const userName = prompt("Enter your username:");
const password = prompt("Enter your password:");

// Predefined correct username and password
const correctUserName = "Bilal";
const correctPassword = "BMJ";

// Compare entered values with correct values
if (userName === correctUserName && password === correctPassword) {
    alert("Login successful");
} else {
    alert("Invalid user or password");
}
