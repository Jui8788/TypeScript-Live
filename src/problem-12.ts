// 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.
function processInput(input: unknown) {
  if (typeof input === "string") {
    console.log("string type");
  } else if (typeof input === "number") {
    console.log("number type");
  } else {
    console.log("unknown type");
  }
}

const test = processInput("jui");
