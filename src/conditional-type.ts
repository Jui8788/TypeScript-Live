{
  // Conditional Type
  //   type CheckString<T> = T extends string ? true : false;
  type CheckString<T> = T extends string ? string : unknown;

  type IsString = CheckString<boolean>;

  interface Person {
    name: string;
    age: number;
  }

  // type hasOwnProperty<T> = T extends "name" | "age" ? true : false;
  type hasOwnProperty<T> = T extends keyof Person ? true : false;

  type Checking = hasOwnProperty<"name">;

  //
}
