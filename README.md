# Type Errors in TypeScript Function Parameters

This example demonstrates a common error in TypeScript: type errors when using function parameters.  The `add` and `subtract` functions are defined to accept number parameters.  However, if you pass in a string or null, a type error occurs.

## Bug
The `bug.ts` file contains the initial code with the type error.  Calling the functions with non-number parameters causes TypeScript to throw errors during compilation.

## Solution
The `bugSolution.ts` file provides a solution by adding type guards or input validation to handle invalid parameters gracefully.