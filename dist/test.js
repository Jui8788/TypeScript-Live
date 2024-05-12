"use strict";
function fibonacci(n) {
    let a = 0n;
    let b = 1n;
    let sum = 0n;
    for (let i = 0; i <= n; i++) {
        sum += a;
        const temp = a + b;
        a = b;
        b = temp;
    }
    return sum;
}
const n = 100000;
const result = fibonacci(n);
console.log({ result });
