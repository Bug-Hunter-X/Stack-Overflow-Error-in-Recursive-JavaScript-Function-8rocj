# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow.  The `foo()` function recursively compares two numbers; however, if the difference between them is large, the call stack will overflow, resulting in an error.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version using iteration to avoid the stack overflow issue.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (like a browser's console or Node.js).
3. Observe the stack overflow error when using large differences in inputs.