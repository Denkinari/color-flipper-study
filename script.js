const colors = [
  "green",
  "red",
  "blue",
  "orange",
  "purple",
  "yellow",
  "black",
  "white",
  "brown",
  "pink",
  "cyan",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const selectedNumbers = [];

btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber();
  while (selectedNumbers.includes(randomNumber)) {
    randomNumber = getRandomNumber();
  }
  selectedNumbers.push(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

  if (selectedNumbers.length === colors.length) {
    selectedNumbers.length = 0;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
