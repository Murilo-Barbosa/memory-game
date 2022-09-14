const grid = document.querySelector(".grid");
const cards = [
  "beth",
  "brain",
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
// Função responsavel por criar um elemento de carta
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};
//Função responsavel por criar a carta!
const createCard = () => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  card.appendChild(front);
  card.appendChild(back);