const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liArray = [];

const ulElement = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.classList.add("item");
  liElement.textContent = ingredient;
  liArray.push(liElement);
});
console.log(liArray);

ulElement.prepend(...liArray);
