function hcf(a, b) {
    return !b ? a : hcf(b, a % b);
}

function lcm(a, b) {
    return (a * b) / hcf(a, b);
}
console.log(lcm(3,3));
