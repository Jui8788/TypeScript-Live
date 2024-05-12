{
  //
  // keyof
  interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
  }

  const myCar: Car = {
    brand: "Tesla",
    model: "A-123",
    year: 2024,
    isElectric: true,
  };

  //   const getProperty = () => {
  //     console.log(myCar["brand"]);
  //   };

  //   const getProperty = (
  //     obj: Car,
  //     key: "brand" | "model" | "year" | "isElectric"
  //   ) => {
  //     console.log(obj[key]);
  //   };

  const getProperty = (obj: Car, key: keyof Car) => {
    console.log(obj[key]);
  };

  getProperty(myCar, "model");

  //
}
