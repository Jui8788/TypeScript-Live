{
  // Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

  function logString(param1: unknown) {
    if (typeof param1 === "string") {
      console.log(param1);
    } else {
      console.log("Input is not a string.");
    }
  }

  logString("Hello World");
  logString(5);
}
