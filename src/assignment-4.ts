{
  // Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

  function reverseArray<T>(array: T[]) {
    return array.reverse();
  }

  const numberArray: number[] = [10, 20, 30];
  console.log(reverseArray(numberArray));

  const stringArray: string[] = ["apple", "banana", "cherry"];
  console.log(reverseArray(stringArray));
}
