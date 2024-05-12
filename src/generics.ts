{
  //
  // Generics
  //   const numArray: number[] = [1, 2, 3, 4];
  //   const stringArray: string[] = ["Mezba", "Mir", "Tanmoy"];
  //   const booleanArray: boolean[] = [true, false, true];

  //   type with generics
  type GenericArray<T> = Array<T>;

  const numArray: GenericArray<number> = [1, 2, 3, 4];
  const stringArray: GenericArray<string> = ["Mezba", "Mir", "Tanmoy"];
  const booleanArray: GenericArray<boolean> = [true, false, true];

  //   interface with generics
  //   interface IUser {
  //     name: string;
  //     age: number;
  //     profileData: {
  //       bio: string;
  //       profilePhoto: string;
  //     };
  //   }

  interface IUser<U, T> {
    name: string;
    age: number;
    profileData: U;
    id: T;
  }

  const user1: IUser<
    {
      bio: string;
      profilePhoto: string;
    },
    string
  > = {
    name: "Shabbir",
    age: 25,
    profileData: {
      bio: "This is bio",
      profilePhoto: "This is profile link",
    },
    id: "1234",
  };

  const user2: IUser<
    {
      bio: string;
      dateOfBirth: string;
    },
    string
  > = {
    name: "Jui",
    age: 24,
    profileData: {
      bio: "This is bio",
      dateOfBirth: "17 March, 2001",
    },
    id: "5678",
  };

  //   console.log(user1);
  //   console.log(user2);

  //   function with generics

  //   const showMessage = (input: string): string => {
  //     return input;
  //   };

  const showMessage = <T>(input: T): T => {
    return input;
  };

  console.log(showMessage<string>("Hello PHP"));
  console.log(showMessage<number>(8788));

  //   constraints
  const squareNum = <T extends number>(num: T) => num * num;
  console.log(squareNum(5));

  //
}
