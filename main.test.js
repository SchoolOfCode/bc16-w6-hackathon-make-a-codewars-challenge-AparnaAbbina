import { test, expect } from "vitest";
import { findFragments } from "./main.js";

//Testing 5 X 5 array to expect the result to be `AKA7` characters
test("Tetsing output for 5 x 5 array to save planet EXIS", () => {
  const expected = `AKA7`;
  const actual = findFragments([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]);
  expect(actual).toBe(expected);
});

//Testing 4 x 4 array to expect the result to be `"("0` characters
test("Tetsing output for 4 x 4 array to save planet EXIS", () => {
  const expected = `"("0`;
  const actual = findFragments([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]);
  expect(actual).toBe(expected);
});

//Testing 3 x 3 array to expect the result to be `KZK<` characters
test("Tetsing output for 3 x 3 array to save planet EXIS", () => {
  const expected = `KZK<`;
  const actual = findFragments([
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45],
  ]);
  expect(actual).toBe(expected);
});

//Testing 2 x 2 array to expect the result to be `2<2(` characters
test("Tetsing output for 2 x 2 array to save planet EXIS", () => {
  const expected = `2<2(`;
  const actual = findFragments([
    [10, 20],
    [30, 40],
  ]);
  expect(actual).toBe(expected);
});

//Testing 1 x 1 array to expect the result to be `dddd` characters
test("Tetsing output for 1 x 1 array to save planet EXIS", () => {
  const expected = `dddd`;
  const actual = findFragments([[100]]);
  expect(actual).toBe(expected);
});

//Testing 3 x 3 array to expect the result to be `0000` characters
test("Tetsing output for 3 x 3 array to save planet EXIS", () => {
  const expected = `0000`;
  const actual = findFragments([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]);
  expect(actual).toBe(expected);
});
