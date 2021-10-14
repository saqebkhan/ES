// const addition=(arr1, arr2)=>arr1.map((item, index)=>item + arr2[index])

// console.log(addition([1,2,3,4],[5,6,7,8]))



const addition=(arr1, arr2)=>{

const newArr=[]

arr1.forEach((element, index)=>{
    newArr.push(element+ arr2[index])
})
return newArr
}
console.log(addition([1,2,3,4],[5,6,7,8]))
