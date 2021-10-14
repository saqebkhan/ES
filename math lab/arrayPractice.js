// var a=[24,75,12,14,1]
// var b=[35,24,13,2]
// var c=[7,1,75,24,15,7]

// var z=[...a,...b,...c]

// var an=(...new Set(z))
// console.log(ans)


const FindSortedUniq=(objArr)=>{
let mergedArr=[];
objArr.data.forEach(element => {
    mergedArr=[...mergedArr,...element]
});
const uniqArr=[...new Set(mergedArr)].sort((a,b)=>a-b);
return uniqArr
}
console.log(FindSortedUniq(
    {
    data:[
        [24,75,12,14,1],
        [35,24,13,2],
        [7,1,75,24,15,7],
        [0,23,45,67,89],
        [99,89,]
        
        
    ]
}))
