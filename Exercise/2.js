function PrimeAndComposite(number){
    if(number<2)
        {return "not prime"};
    for(i=2; i<number; i++){
        if(number%i==0){return "not prime"}
    }
    return "prime"

}
console.log(PrimeAndComposite(11))

// function primeorComposite(number){
//     if(number<2){return "prime"}
//     for(i=2; i<number; i++){
//         if(number%i===0){
//             return "prime"
//         }
//     }return "composite"
// }
// console.log(primeorComposite(2))
