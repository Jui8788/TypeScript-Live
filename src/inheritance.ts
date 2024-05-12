{
  // inheritance

  //   -->Parent class/ super class
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sound(): void {
      console.log(`${this.name} makes sound`);
    }
  }

  //   --->Child Class/ Subclass
  class Dog extends Animal {
    color: string;

    constructor(name: string, age: number, color: string) {
      super(name, age);
      this.color = color;
    }
  }

  const dog = new Dog("Barkley", 20, "brown");
  dog.sound();
  //
}
