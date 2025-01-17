function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: parameters must be numbers');
  }
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

//Now handles invalid inputs
try {
  let result3 = add(5, "hello");
} catch (e) {
  console.error(e);
}

try {
  let result4 = subtract(null, 4);
} catch (e) {
  console.error(e);
}
