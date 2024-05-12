{
  // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

  const arr: number[] = [1, 2, 3, 4, 5, 6];

  const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter((elem: number) => elem % 2 === 0);
  };

  const result = filterEvenNumbers(arr);
  console.log(result);
}
