{
  // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

  const repeatString = (a: string, b: number): string => {
    let repeatStr = a.repeat(b);
    return repeatStr;
  };

  const result = repeatString("Hello!", 3);
  console.log(result);
  //
}
