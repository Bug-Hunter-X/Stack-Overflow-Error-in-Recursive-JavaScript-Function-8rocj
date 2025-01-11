function foo(a, b) {
  while (a < b) {
    a++;
  }
  return a === b;
}
console.log(foo(1, 10)); //false
console.log(foo(10, 1)); //false
console.log(foo(5, 5));  //true
console.log(foo(5, 1));  //false