{
  // Compile Time Polymorphism--> Method Overloading
  class Calculator {
    add(x: number, y: number): number {
      return x + y;
    }

    add(x: string, y: string): string {
      return x + y;
    }
  }

  const calc = new Calculator();
  //   console.log(calc.add(2, 3));
  //   console.log(calc.add("2", "3"));

  // Run time polymorphism ---> Method Overriding
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sound(): void {
      console.log(`Animal makes sound`);
    }
  }

  class Dog extends Animal {
    color: string;

    constructor(name: string, age: number, color: string) {
      super(name, age);
      this.color = color;
    }

    sound(): void {
      console.log(`Dog makes sound`);
    }
  }

  const dog = new Dog("Barkley", 20, "brown");
  dog.sound();

  //
}
