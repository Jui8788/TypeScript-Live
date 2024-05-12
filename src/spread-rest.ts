{
  // spread operator
  const players: string[] = [
    "CR7",
    "Neymar",
    "Messi",
    "Ramos",
    "Jordi",
    "Carvajal",
    "De-Bruyne",
    "Kaka",
  ];

  const playing = {
    players: { ...players },
  };

  const [a, b, , , c, ...rest] = players;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);

  const arr1: string[] = ["Mezba", "Tanmoy", "Firoz"];
  const arr2: string[] = ["Mezba", "Tanmoy", "Firoz"];

  arr1.push(...arr2);
}
