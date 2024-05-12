{
  // Mapped Type
  type Person = {
    name: string;
    id: number;
    age: number;
  };

  type PersonReadOnly = { readonly [key in keyof Person]: Person[key] };

  //   type PersonReadOnly = {
  //     readonly name: string;
  //     readonly id: number;
  //     readonly age: number;
  //   };

  const person1: Person = {
    name: "Shabbir",
    id: 101,
    age: 24,
  };

  person1.age = 25;

  //
}
