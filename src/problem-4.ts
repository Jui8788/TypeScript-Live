// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

function reverseArray<T>(array: T[]) {
  return array.reverse();
}

const numberArray: number[] = [1, 2, 3, 4, 5];
console.log(reverseArray(numberArray));

const stringArr: string[] = ["ABC", "PQR", "XYZ"];
console.log(reverseArray(stringArr));
