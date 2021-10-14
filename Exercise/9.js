function X6digits(x){
    arrx=x.split("")
    if(arrx.length===6){return "has exactly 6 digits"}return "doesn't have 6 digits"
}
console.log(X6digits("349278"))