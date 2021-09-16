// const { number } = require("prop-types");

const marks=(nums)=>{
    let TotalsOfNumbers=0;
    nums.forEach(element => {
       TotalsOfNumbers= TotalsOfNumbers+element
        
    });
    const average=TotalsOfNumbers/nums.length;
    return average
}
console.log(marks([10,10,1050,10]))

// const takke=(mark)=>{
    
// }