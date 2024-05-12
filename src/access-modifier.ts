{
  // Access-Modifier
  class Animal {
    name: string;
    age: number;
    protected dob: string;

    constructor(name: string, age: number, dob: string) {
      this.name = name;
      this.age = age;
      this.dob = dob;
    }

    sound(): void {
      console.log(`${this.name} makes sound`);
    }
  }
  //
}
