// // const p = document.querySelector('p');
// // const imgs = document.querySelectorAll('.item img');
// // const item2 = document.querySelector('.item2');
// // const item2Image = item2.querySelector('img');
// // const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the textContent property on that elemnet
// // heading.textContent = 'jerry is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `{pizzaList.textContent} 🍕 `;

// pizzaList.insertAdjacentText('afterbegin', '🍕');

// classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

console.log('I am working');

const counter = 0;
while (counter < 5) {
  console.log('**********---------------------');
}

for (let i = 0; i < 8; i++) {
  console.log('-------------------------------');
}
