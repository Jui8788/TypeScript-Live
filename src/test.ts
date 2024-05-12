function fibonacci(n: number): bigint {
  let a: bigint = 0n;
  let b: bigint = 1n;
  let sum: bigint = 0n;

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
