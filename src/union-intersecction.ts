{
  type Cat = { name: string; meaw: true };
  type Dog = { name: string; ghew: true };

  type CatOrDog = Cat | Dog;
  type CatAndDog = Cat & Dog;

  const pet1: CatOrDog = { name: "Tom", meaw: true };
  const pet2: CatAndDog = {
    name: "BrotherFromAnotherMother",
    meaw: true,
    ghew: true,
  };
}
