import { it, expect, describe } from "vitest";

import calculateWordsInText from "../../utils/calculateWordsInText";

describe("calculateWordsInText()", () => {
  it("should calculate the number of words in a text", () => {
    const sentence = "a sentence";

    const totalWords = calculateWordsInText(sentence);

    expect(totalWords).toBe(2);
  });

  it("should return 0 (zero) if an empty string containing white space is provided", () => {
    const whiteSpaceString = "       ";

    const totalWords = calculateWordsInText(whiteSpaceString);

    expect(totalWords).toBe(0);
  });
});
