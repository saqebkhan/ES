// function dividesSelf(n) {
//     var tmp = n;
//     if (n%10 == 0)
//       return false;
//     while(n != 0)
//     {
//      if (tmp % (n%10) != 0)
//        return false;
//       n /= 10;
//     }  
//     return true;  
//   }
  
function checkDivisibility(n, digit){

    return (digit != 0 && n % digit == 0);
}

  function allDigitsDivide(n){
        let temp = n;
        while (temp > 0)
        {
 
            let digit = temp % 10;
            if (!(checkDivisibility(n, digit)))
                return false;
 
            temp = parseInt(temp / 10, 10);
        }
        return true;
    }
 
    console.log(allDigitsDivide(20));
