import factorial from "@code/Factorial";

test("factorial", function () {
  expect(factorial(3)).toEqual(6);
  expect(factorial(4)).toEqual(24);
  expect(factorial(5)).toEqual(120);
})