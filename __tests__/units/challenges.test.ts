import { it, expect, describe } from "vitest";

import {
  calculatePoints,
  calculatePointsPercent,
} from "../../utils/challenges";

describe("calculatePoints()", () => {
  it("should return the number of words found in a sentence", () => {
    const sentence1 = "first sentence";
    const sentence2 = "second sentence";

    const pointsResult = calculatePoints(sentence1, sentence2);

    expect(pointsResult).toBe(1);
    expect(pointsResult).toBeTypeOf("number");
  });

  it("should return 0 (zero) if empty strings are provided", () => {
    const sentence1 = "";
    const sentence2 = "";

    const pointsResult = calculatePoints(sentence1, sentence2);

    expect(pointsResult).toBe(0);
  });

  it("should return 0 (zero) if no words match in both sentences", () => {
    const sentence1 = "sentence1";
    const sentence2 = "sentence2";

    const pointsResult = calculatePoints(sentence1, sentence2);

    expect(pointsResult).toBe(0);
  });
});

describe("calculatePointsPercent()", () => {
  it("should calculate the percentage of a given value contained in another value", () => {
    const value1 = 5;
    const value2 = 10;

    const percentageResult = calculatePointsPercent(value1, value2);

    expect(percentageResult).toBe(50)
  });
  it("should return 0 if both values are 0 (zero)", () => {
    const value1 = 0;
    const value2 = 0;

    const percentageResult = calculatePointsPercent(value1, value2);

    expect(percentageResult).toBe(0)
  });
});
