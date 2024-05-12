{
  // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
  const arr: number[] = [10, 5, 8, 20, 3];

  const findLargestNumber = (arr: number[]): number => {
    return Math.max(...arr);
  };

  const result = findLargestNumber(arr);
  console.log(result);
}
