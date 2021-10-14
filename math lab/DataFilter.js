const arr1=[1,undefined,"saqeb", 3, 5,{}, "khan",,5773, 5.221,"pathan",null]

const arr2=[];

arr1.forEach(element => {
    if (typeof element ==="string"){
        arr2.push(element.toUpperCase());
    }
});
console.log(arr2)

r=[1,2,3,4,5]
mr=[]
r.forEach((element)=>{
    if(element>3){
        mr.push(element)
    }
});
console.log(mr)