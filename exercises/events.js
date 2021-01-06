const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!');
}

const hooray = () => console.log('Hooray');

butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', hooray);

// how to unbind a function from an element
// butts.removeEventListener('click', handleClick);

// listen to multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('BUYING ITEM');
// }
// console.log(buyButtons);
// console.log(butts);
// // buyButtons.addEventListener('click', buyItem);

// buyButtons.forEach(function (buyButton) {
//   console.log('binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

function handleBuyButtonCLick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonCLick);
});

const photoEl = document.querySelector('.photo');

photoEl = <img class="photo" src="https://picsum.photos/2000" alt="Nice">