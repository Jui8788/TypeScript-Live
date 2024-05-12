{
  //
  // function
  type TOurFunction = (param1: number, param2: number) => number;

  const numberFunction: TOurFunction = (param1, param2) => {
    let sum = param1 + param2;
    return sum;
  };

  const result = numberFunction(2, 5);
  console.log(result);
  //
}
