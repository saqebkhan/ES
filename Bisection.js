const bisectionAlgorithm=(arrNum,findNum)=>{
const firstIndex=0;
lastIndex=arrNum.length-1
mid=Math.floor((firstIndex+lastIndex)/2);
if(arrNum[mid]==findNum){
    return mid;
}else if(arrNum[mid]>findNum){
    firstIndex=mid
} else{lastIndex=mid}
}
console.log(bisectionAlgorithm([2,4,5,7,11,45,77,120,134,145],120));

////yet to be done////
