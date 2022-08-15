import { it, expect, describe } from "vitest";

import { minuteToSeconds, secondsToMinute } from "../../utils/timeConverter";

describe("minuteToSeconds()", () => {
  it("convert minutes to seconds", () => {
    const twoMinutes = 2;
    const oneMinute = 1;

    const twoMinutesToSeconds = minuteToSeconds(twoMinutes);
    const oneMinuteToSeconds = minuteToSeconds(oneMinute);

    expect(twoMinutesToSeconds).toBe(120);
    expect(oneMinuteToSeconds).toBe(60);
  });

  it("should return 0 (zero) if 0 (zero) is received", () => {
    const zeroMinute = 0;

    const zeroMinuteToSeconds = minuteToSeconds(zeroMinute);

    expect(zeroMinuteToSeconds).toBe(0);
  });

  it("should return NaN if NaN is provided", () => {
    const NotANumber = NaN;

    const NotANumberToMinute = minuteToSeconds(NotANumber);

    expect(NotANumberToMinute).toBeNaN;
  });
});

describe("secondsToMinute()", () => {
  it("should convert time seconds to it's minute equivalent", () => {
    const sixtySeconds = 60;
    const sixtyOneSeconds = 61;
    const thirtySeconds = 30;

    const sixtySecondsToMinute = secondsToMinute(sixtySeconds);
    const thirtySecondsToMinute = secondsToMinute(thirtySeconds);
    const sixtyOneSecondsToMinute = secondsToMinute(sixtyOneSeconds);

    expect(sixtySecondsToMinute).toBe(1);
    expect(thirtySecondsToMinute).toBeLessThan(1);
    expect(sixtyOneSecondsToMinute).toBe(1);
  });
});
