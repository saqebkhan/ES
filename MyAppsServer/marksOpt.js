// const marks=(numbers)=>{
//     const total= numbers.reduce((acc, curr)=> acc+ curr);
//     return total/numbers.length;
// }
// console.log(marks([2,3]))

const marks=(numbers)=>numbers.reduce((acc,curr)=>acc+curr)/numbers.length;
console.log(marks([2,3]))

