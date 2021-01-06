// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the funtion body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// // function call. or **Run**
// const myTotal = calculateBill(100, 0.085);
// const myTotal2 = calculateBill(200, 0.085);
// console.log(myTotal, myTotal2);
