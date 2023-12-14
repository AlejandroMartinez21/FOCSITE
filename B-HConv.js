// Binary - Hexidecimal

function convertBinaryToHex() {
    // Get the binary input
    const binaryInput = document.getElementById("binaryInput").value.trim();

    // Check if the input is valid binary
    if (!/^[01]+$/.test(binaryInput)) {
        alert("Please enter a valid binary number.");
        return;
    }

    // Convert the binary string to an integer
    const binaryNumber = parseInt(binaryInput, 2);

    // Convert the integer to hexadecimal
    const hexadecimalNumber = binaryNumber.toString(16).toUpperCase();

    // Update the output element
    document.getElementById("hexOutput").textContent = "Hexadecimal: " + hexadecimalNumber;
}
