import "whatwg-fetch";
import { expect, it, describe } from "vitest";
import { server, rest } from "../utils/testServer";

import { getChallengeText } from "../services/challenge";
import {
  API_ENDPOINT,
  FAKE_API_RESPONSE,
  FALLBACK_CHALLENGE,
} from "../constants/challenge";

describe("getChallengeText()", () => {
  it("should return a string", async () => {
    const response = await getChallengeText();
    const stringResponse = response[0];

    expect(stringResponse).toBeTypeOf("string");
    expect(stringResponse).toBe(FAKE_API_RESPONSE);
  });

  it("handles api failure gracefully with a fallback challenge", async () => {
    server.use(
      rest.get(API_ENDPOINT, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    await expect(getChallengeText()).resolves.toEqual([FALLBACK_CHALLENGE]);
  });
});
