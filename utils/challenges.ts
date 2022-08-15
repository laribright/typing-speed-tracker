import { PERCENTAGE_VALUE } from "../constants/challenge";
import { returnApiConfigArgsModel } from "../models/challenge";
import stringToArray from "./stringToArray";

export const returnApiConfig: (
  args: returnApiConfigArgsModel
) => returnApiConfigArgsModel = (args) => {
  const config = {
    method: args.method,
  };
  return config;
};

export const calculatePoints = (userInput: string, challengeText: string) => {
  const correctWords = [];

  const userInputStringArray = stringToArray(userInput);
  const challengeTextStringArray = stringToArray(challengeText);

  userInputStringArray.forEach((userInput) => {
    const isIncluded = challengeTextStringArray.includes(userInput);
    if (isIncluded) correctWords.push(userInput);
  });

  return correctWords.length;
};

export const calculatePointsPercent = (
  pointsScore: number,
  totalExpectedScore: number
) => {
  if (pointsScore === 0 && totalExpectedScore === 0) return 0;
  const pointsPercent = (pointsScore * PERCENTAGE_VALUE) / totalExpectedScore;
  return pointsPercent;
};
