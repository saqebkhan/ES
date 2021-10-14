// function main(){
//     var  sum = 1000;
//     var a;
//     for (a = 1; a <= sum/3; a++)
//     {
//         var b;
//         for (b = a + 1; b <= sum/2; b++){
//             var c = sum - a - b;
//             if ( a*a + b*b == c*c ){
//                console.log(`a=${a}, b=${b}, c=${c}`);
//             //    console.log(a,b,c);
//             }
//     }
//     }
//     return 0;
// }
// main()


for(var a = 1; a < 500; a++){
    for(var b = a; b < 1000; b++){
      var c = Math.sqrt(a * a + b * b);
      if(c > b && Number.isInteger(c) && a + b + c == 1000){
        console.log(a , b , c);
      }
    }
  }
