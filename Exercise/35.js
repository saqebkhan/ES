const check = (a,b,c) => Math.abs(a - b) == Math.abs(b - c) || Math.abs(a - c) == Math.abs(b - c) ? true : false;

console.log(check(1, 3, 6));