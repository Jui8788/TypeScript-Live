"use strict";
{
    // spread operator
    const players = [
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
}
