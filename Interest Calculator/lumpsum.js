// tenure -> int (years)
// investment -> int (Amount)
// return -> int (Percentage)

// year    amount      return      updatedAmount
// 1       1000        10%     -> 1100
// 2       1100        10%     -> 1210


const lumpsum = (tenure, inv, returnPa) => {
  let updatedAmount = inv;
  for (let i = 0; i < tenure; i++) {
    updatedAmount = (returnPa / 100) * updatedAmount + updatedAmount;
  }
  return updatedAmount.toFixed(2);
};
console.log(lumpsum(10, 1000, 10));
