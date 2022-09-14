const grid = document.querySelector(".grid");
const characters = [
  "beth",
  "jerry",
  "jessica",
  "meeseeks",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "scroopy",
  "summer",
];
// Função responsavel por criar um elemento de forma dinamica, colocando tipo e classe como parametro!
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};
//Função responsavel por criar a carta!
const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/${character}.png')`

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

const loadGame = () => {

  characters.forEach((character) => {

    const card = createCard(character);
    grid.appendChild(card);

  })

}

loadGame();