// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
// 1, 2, 3 → 6
// 3, 2, 3 → 2
// 3, 3, 3 → 0

function sum(a, b, c) {
  if (a !== b && b !== c && a !== c) {
    return a + b + c;
  } else if (a == b && b == c && c == a) {
    return 0;
  } else if (a == c) {
    return b;
  } else if (c == a) {
    return b;
  } else if (b == c) {
    return a;
  } else if (a == b) {
    return c;
  }
}

console.log(sum(6, 12, 2));
console.log(sum(2, 2, 13));
console.log(sum(23, 23, 23));
