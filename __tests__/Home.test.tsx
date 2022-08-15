import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "../pages";
import { Provider } from "react-redux";
import { store } from "../store";
import { CHALLENGE_TIME_IN_SECONDS } from "../constants/challenge";

describe("<Home />", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  it("renders <ChallengeText /> component", async () => {
    const ChallengeText = screen.getByRole("display-challenge");

    expect(ChallengeText).toBeTypeOf("object");
    expect(ChallengeText).toBeDefined();
  });

  it("renders the <UserChallengeInputSolution /> component", () => {
    const divElement = screen.getByRole("text-area");

    expect(divElement.id).toEqual("text-area");
  });

  it("renders the <TimerCard /> component with the correct challenge time", () => {
    const divElements = screen.getAllByRole("timer");
    const aMinuteInSeconds = 60;

    expect(divElements[0].innerHTML).toBe(
      (CHALLENGE_TIME_IN_SECONDS[0] / aMinuteInSeconds).toString()
    );
    expect(divElements[1].innerHTML).toBe(
      (CHALLENGE_TIME_IN_SECONDS[1] / aMinuteInSeconds).toString()
    );
    expect(divElements[2].innerHTML).toBe(
      (CHALLENGE_TIME_IN_SECONDS[2] / aMinuteInSeconds).toString()
    );
  });
});
