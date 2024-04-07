function greetUser(name: string) {
    const greeting = document.getElementById('greeting-message'); // Get the paragraph element
    greeting.textContent = `Hello, ${name}!`; // Set the paragraph text
  }
  