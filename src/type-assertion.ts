{
  //
  // type assertion
  let input: any = "Hello";
  //   input = 100;

  const textLength = (input as string).length;
  //   console.log(textLength);

  type Foo = {
    bar: string;
  };

  let foo = {} as Foo;
  foo.bar = "something";

  let value: string | number;

  value = "programming hero" as string;
  value = 1900 as number;
  //
}
