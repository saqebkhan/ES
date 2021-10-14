const arr1=["cat", "mat","hat"]

const arr2=["fat","bag", "rat"]

const arr3=["hat", "rat", "mat"]

const ArrJoin=[...arr1,...arr2,...arr3]
const uniquArr=[...new Set(ArrJoin)];

console.log(uniquArr);