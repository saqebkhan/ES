// const printDuplicate=(arr)=>{
//    const newArr=[];
//    arr.forEach((element , index) => {
// arr.indexOf(element)!==index && newArr.push(element)
   
// });
// return newArr
// }
// console.log(printDuplicate([1,2,2,3,4,5,6,6,7,7,8,8,8,8,9,9,9,9,9,]))


// const counts={}
// var str=("saqebkhanhu mai")
// sampleArray= str.split("")
// // const sampleArray=[1,2,3,4]

// sampleArray.forEach(function (x){counts[x]=(counts[x]||0)+1})
// console.log(counts)

// const countOfChar=(str)=>{
// const arrStr=str.split(" ");
// const newObj={}

// arrStr.forEach(element=>{
//     newObj[element] === undefined ? (newObj[element] = 1) : newObj[element]++
// })
// return newObj;
// }
// console.log(countOfChar("i love mumbai i like mumbai"))



function dupsCounter(arr){
let dups={}
arr.forEach(element => {
    dups[element]=(dups[element]||0)+1
});
return dups;
}
// console.log(dupsCounter([1,1,2,3,4,4,5,5,5,6,7,8,9,9,9,9,9,9,9]))
console.log(dupsCounter([1,1,2]))

