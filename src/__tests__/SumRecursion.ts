import sum_n from "@code/SumRecursion";

test("sum", function () {
  expect(sum_n(5)).toEqual(15);
  expect(sum_n(4)).toEqual(10);
  expect(sum_n(3)).toEqual(6);
  expect(sum_n(2)).toEqual(3);
  expect(sum_n(1)).toEqual(1);
})