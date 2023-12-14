const gateImage = document.getElementById('gateImage');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const ON_IMAGE_1_URL = '/assets/AND_Gate_OFFOFF.png';
const OFF_IMAGE_1_URL = '/assets/AND_Gate_OFFOFF.pngg';
const ON_IMAGE_2_URL = '/assets/AND_Gate_ONOFF.png';
const OFF_IMAGE_2_URL = '/assets/AND_Gate_ONOFF.png';
const ON_IMAGE_3_URL = '/assets/AND_Gate_OFFON.png';
const OFF_IMAGE_3_URL = '/assets/AND_Gate_OFFON.png';
const ON_IMAGE_4_URL = '/assets/AND_Gate_ONON.png';
const OFF_IMAGE_4_URL = '/assets/AND_Gate_ONON.png';

let state = 0; 

button1.addEventListener('click', () => {
  state = 1; 
  gateImage.src = ON_IMAGE_1_URL;
});

button2.addEventListener('click', () => {
  state = 2; 
  gateImage.src = ON_IMAGE_2_URL;
});

button3.addEventListener('click', () => {
  state = 3; 
  gateImage.src = ON_IMAGE_3_URL;
});

button4.addEventListener('click', () => {
  state = 4; 
  gateImage.src = ON_IMAGE_4_URL;
});
