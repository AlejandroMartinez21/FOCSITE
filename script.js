function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// ASCII Converter

function convertTextToASCII() {
  // Get user input
  const text = document.getElementById("inputField").value.trim();

  // Convert text to array of characters
  const characters = text.split("");

  // Convert each character to its ASCII code
  const asciiCodes = characters.map(char => char.charCodeAt(0));

  // Display the ASCII codes
  const output = asciiCodes.join(", ");
  document.getElementById("outputField").textContent = `ASCII Codes: ${output}`;
}


