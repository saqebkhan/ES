// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function greaterDiv(a, b) {
  if (a % b != 0) {
    return greaterDiv(b, a % b);
  } else {
    return b;
  }
}

function lowerCommen(num) {
  let answer = 1;
  for (i =1; i < num; i++) 
    answer = (answer * i) / (greaterDiv(answer, i));
  return answer;
}
console.log(lowerCommen(20));
