// const fensingForRect= (p,r, numberOfWIre, costPerFoot)=>{
//     const parimeter= p*r*r;
//     const totalCost= parimeter* numberOfWIre * costPerFoot;
// return totalCost;
// };
// console.log(`Total cost for fensing is Rs.${fensingForRect(10,12,5,10)}`);

// -----------------------------Even number-------------------------------------


const fencingForAny = (edges, numberOfWire, rate) => {
     let sum = 0;
     for (let i =0; i < edges.length; i++){
          sum = sum + edges[i];
     }
     edges.forEach(element => {
          sum= sum +element;
          
     });
     return sum * numberOfWire *rate;
};
console.log(
     `cost for fensing is Rs.${fencingForAny(
          [10, 15, 10, 10, 10, 10, 22], 5,70)}/-`)

// -------------------------------------Even And Odd number----------------------------

// const CollectionSumOfEven=(Numbers) => {
//      let sumEven = 0;
//      let sumOdd = 0;
//      Numbers.forEach((element) => {
//           element % 2 == 0
//           ? (sumEven = sumEven+ element)
//           : (sumOdd = sumOdd + element);
//      });
//      return `Sum Of The Even Numbers are ${sumEven} and Sum of Odd Numbers are ${sumOdd}
//      Total Sum =${sumEven +sumOdd}`;

// };
// console.log(CollectionSumOfEven([5,2,7,9,10,8,17,115,10]));



// <!-----------------------FoR Loop-------------->


// var arr=["2","3","2","3"]
// for(var i=0; i<=9; i++){
     
// console.log(arr[i]);
// }


// var arr=["seb","kela","moz","jam"]
// arr.forEach(function(currentvalue,index,arr){
//      console.log(currentvalue,index,arr);
     
//      })

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 4);
// console.log(doubled);

// const name=("saqeb")
// const message=(`hello ${name}`)
