function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

//In this example, there is no explicit error handling or type checking for invalid input values, such as strings or null.
let result3 = add(5, "hello"); // type error: Argument of type 'string' is not assignable to parameter of type 'number'.
let result4 = subtract(null, 4); // type error: Argument of type 'null' is not assignable to parameter of type 'number'.