function greetUser(name) {
    var greeting = document.getElementById('greeting-message'); // Get the paragraph element
    greeting.textContent = "Hello, ".concat(name, "!"); // Set the paragraph text
}
