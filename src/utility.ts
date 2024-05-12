{
  // utility
  type Person = {
    name: string;
    id: number;
    age: number;
    address?: string;
  };

  //   1.Partial
  const person1: Partial<Person> = {
    name: "Shabbir",
    id: 8788,
    // age: 25,
  };

  //   2.Required
  const person2: Required<Person> = {
    name: "Shabbir",
    id: 8788,
    age: 25,
    address: "Bangladesh",
  };

  //   3.Pick
  type PickType = Pick<Person, "name" | "id" | "age">;
  const person3: PickType = {
    name: "Jui",
    id: 8788,
    age: 24,
  };

  //   4.Omit
  type OmitType = Omit<Person, "address" | "id">;
  const person4: OmitType = {
    name: "Jui",
    age: 24,
  };

  //   5.Readonly
  type ReadonlyType = Readonly<Person>;

  //   6. Record
  type MyObj = Record<string, string>;
  const data: MyObj = {
    name: "Shabbir",
    address: "Sylhet",
  };

  //
}
