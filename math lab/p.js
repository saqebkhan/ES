const arr = [1, 2, 3, null, { name: "saqeb" }, true, "cat", undefined];

const result = arr
  .filter((item) => (item = typeof item === "number" && item))
  .reduce((a, b) => a + b);

console.log(result);


// var arrr=[1,2,"saqeb", null, {kan:"maila"}, false, undefined];
// let myArr=[];
// arrr.forEach((element)=> element= typeof element ==="object" && myArr.push(element));

// console.log(myArr);


// function callinghoisting(average, price, distance){
//   return distance/average * price;
// }

// console.log(callinghoisting(45,99,240));
