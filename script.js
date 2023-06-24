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
//caso queira definir a cor de acordo com o fundo selecione o id:
//const textColor = document.getElementById("text-color");
//e adicione o seguinte código dentro do evento abaixo:
// textColor.style.color = colors[randomNumber];
// faça isso no hex.js também

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
