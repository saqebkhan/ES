const duplicatesLoremUniq=(newStr)=>{
// const newStr= myLorem.split(" ")
const myEle=[]
newStr.forEach((element,index) => {
    newStr.indexOf(element) !== index && myEle.push(element)
    
});
// console.log(myEle)
const myUniq=[...new Set(myEle)]
return myUniq;
// console.log(myUniq.length)
}
console.log(duplicatesLoremUniq([1,1,2,2,2,3,4,5,6,6,7,8,8,9,9,9,9,9]))
