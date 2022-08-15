import { it, expect, describe } from "vitest";

import stringToArray from "../../utils/stringToArray";

describe("stringToArray()", () => {
  it("should convert a string sentence to an array", () => {
    const validString = "validString";

    const stringArr = stringToArray(validString);

    expect(stringArr).toHaveLength(1);
  });

  it("should return 0 (zero) if an empty string is provided", () => {
    const emptyString = "";

    const emptyArray = stringToArray(emptyString);

    expect(emptyArray).toHaveLength(0);
  });

  it("should return 0 (zero) if an empty string with excess white space is provided", () => {
    const excessSpaceString = "     ";

    const excessSpaceStringArray = stringToArray(excessSpaceString);

    expect(excessSpaceStringArray).toHaveLength(0);
  });

  it("should return an array with length if special string characters is provided", () => {
    const validStringCharacters = "{}[]% @";

    const validStringCharactersArray = stringToArray(validStringCharacters);

    expect(validStringCharactersArray).toHaveLength(2);
  });
});
