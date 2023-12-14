// NOT Gate

const gateImage = document.getElementById('gateImage');
const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');

let state = false; // Initial state (OFF)

onButton.addEventListener('click', () => {
  state = true; // Change state to ON
  gateImage.src = "/assets/NOT Gate ON.png"; // Update image to "ON" image
});

offButton.addEventListener('click', () => {
  state = false; // Change state to OFF
  gateImage.src = "/assets/NOT Gate Off.png"; // Update image to "OFF" image
});
