{
  // typeof
  const isString = (input: any) => {
    if (typeof input === "string") {
      console.log("string type");
    } else if (typeof input === "number") {
      console.log("number type");
    } else {
      console.log("unknown type");
    }
  };

  isString("Jui");

  //   in guard
  const displayBrand = (data: any) => {
    if ("brand" in data) {
      console.log(data.brand);
    } else {
      console.log("Brand does not exist");
    }
  };

  displayBrand({
    mode: "abc",
    brand: "Toyota",
  });

  //   instance of

  class X {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class P {
    age: number;

    constructor(age: number) {
      this.age = age;
    }
  }

  const Y = (params: any) => {
    if (params instanceof X) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  };

  const x = new X("Shabbir");
  const p = new P(25);
  Y(p);
}
