// function doctorize(firstName){
//     return `Dr. ${firstName}`
// }

// //Anon Fucntion
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// creating arrow functions
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// immediately invoked function expression

(function () {
  console.log('Running the Anon function');
  return 'you are cool';
})();

// Methods!!!
const kolton = {
  name: 'kolton thompson',
  // Methods!
  sayHi() {
    console.log('hey kolton');
    return 'hey kolton';
  },
  // short hand method  (SHORT HAND METHOD IS MOST COMMON)
  yellHi() {
    console.log('HEY KOLTON');
  },
  // arrow function
  wisperHi: () => {
    console.log('hii kolton, im a mouse');
  },
};

// Callback Functions
// click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', function () {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(function () {
  console.log('DONE! Time to eat!');
}, 1000);
