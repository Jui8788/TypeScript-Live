{
  //
  // interface
  interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
    startEngine(): string;
    stopEngine(): void;
  }

  const myCar: Car = {
    brand: "Tesla",
    model: "A-123",
    year: 2024,
    isElectric: true,
    startEngine() {
      const message = "Engine Started";
      console.log(message);
      return message;
    },
    stopEngine() {
      console.log("Engine Stopped");
    },
  };

  console.log(myCar.brand);
  myCar.startEngine();

  type numOfArray = number[];
  const numberArray: numOfArray = [1, 2, 3];

  interface numOfArrayInterface {
    [index: number]: number;
  }

  const numberArray1: numOfArrayInterface = [4, 5, 6];

  type sum = (num1: number, num2: number) => number;

  interface sum1 {
    (num1: number, num2: number): number;
  }

  const addSum: sum1 = (num1, num2) => num1 + num2;
  console.log(addSum(2, 3));

  //
}
