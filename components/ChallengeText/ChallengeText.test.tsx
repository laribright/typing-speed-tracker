import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import ChallengeText from "./ChallengeText";
import { store } from "../../store";
import { FALLBACK_CHALLENGE } from "../../constants/challenge";

describe("<ChallengeText />", () => {
  render(
    <Provider store={store}>
      <ChallengeText challengeText={FALLBACK_CHALLENGE} />
    </Provider>
  );
  it("displays the challenge text", () => {
    const divElement = screen.getByRole("display-challenge");

    expect(divElement.innerHTML).toBe(FALLBACK_CHALLENGE);
    expect(divElement.innerHTML).toBeTypeOf("string");
  });
});
