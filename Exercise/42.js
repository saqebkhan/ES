// Javascript program to find the smallest number evenly divisible by
// all numbers 1 to n
function gcd(a, b) {
    if (a % b != 0)
        return gcd(b, a % b);
    else
        return b;
}

// Function returns the lcm of first n numbers
function lcm(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++)
        ans = (ans * i) / (gcd(ans, i));
    return ans;
}
console.log(lcm(10));
//The above solution works fine for a single input.
//But if we have multiple inputs,
//it is a good idea to use Sieve of Eratosthenes to store all prime factors.
//Please refer below article for Sieve based approach