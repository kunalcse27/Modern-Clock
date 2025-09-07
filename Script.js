const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 - 90; // -90 to offset from pointing right to up
  secondHand.style.transform = `rotate(${secondsDegrees}deg) translateY(-50%)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 - 90;
  minHand.style.transform = `rotate(${minsDegrees}deg) translateY(-50%)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 - 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg) translateY(-50%)`;
}

setInterval(setDate, 1000);
setDate(); 
