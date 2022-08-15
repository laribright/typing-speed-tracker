import React, { FC, useEffect, useState } from "react";

import {
  CHALLENGE_AVERAGE,
  CHALLENGE_PASSMARK,
} from "../../constants/challenge";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { stopChallenge } from "../../redux/features/challenge/challengeSlice";
import { calculatePointsPercent } from "../../utils/challenges";

interface DisplayChallengeResultProps {
  totalChallengeWords: number;
  points: number;
  testTimer: number;
}

const DisplayChallengeResult: FC<DisplayChallengeResultProps> = (props) => {
  const { totalChallengeWords, points, testTimer } = props;
  const [typingTime, setTypingTime] = useState(0);

  const dispatch = useAppDispatch();
  const { started: isChallengeStarted } = useAppSelector(
    (state) => state.challenge
  );

  const challengePassed = totalChallengeWords === points;
  if (challengePassed) {
    dispatch(stopChallenge());
  }

  const pointsPercentage = calculatePointsPercent(points, totalChallengeWords);
  const isBelowAverage =
    isChallengeStarted &&
    pointsPercentage < CHALLENGE_AVERAGE &&
    pointsPercentage < CHALLENGE_PASSMARK;
  const isAboveAverage =
    isChallengeStarted &&
    pointsPercentage >= CHALLENGE_AVERAGE &&
    pointsPercentage <= CHALLENGE_PASSMARK;
  const isChallengePassed =
    isChallengeStarted && pointsPercentage >= CHALLENGE_PASSMARK;
  const percentageColor = isBelowAverage
    ? "text-red-700"
    : isAboveAverage
    ? "text-yellow-200"
    : isChallengePassed && "text-green-700";

  const testTimerInMins = +(testTimer / 60).toFixed(2);

  const typingSpeed = Math.ceil(points / testTimerInMins);

  return (
    <div className="w-full text-[rgba(0,0,0,0.7)] text-center flex flex-col justify-around rounded-2xl bg-[rgba(255,255,255,0.7)] border border-white">
      <div>
        <h5 className="font-bold text-[22px]">TOTAL CORRECT WORDS</h5>
        <h3
          className={`font-bold text-[28px] ${
            challengePassed && "text-green-700"
          }`}
        >
          {points}/{totalChallengeWords} {challengePassed ? "💪🏽" : ""}
        </h3>
      </div>
      <div>
        <h5 className="font-bold text-[22px]">Accuracy</h5>
        <h3 className={`${percentageColor} font-bold text-[28px]`}>
          {pointsPercentage.toFixed(2)} %
        </h3>
      </div>
      <div>
        <h5 className="font-bold text-[22px]">SPEED</h5>
        <h3 className="font-bold text-[28px]">
          {typingSpeed === NaN ? "" : typingSpeed} WPM
        </h3>
      </div>
    </div>
  );
};

export default DisplayChallengeResult;
