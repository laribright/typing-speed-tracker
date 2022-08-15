import { API_ENDPOINT, FALLBACK_CHALLENGE } from "../constants/challenge";
import { getChallengeModel } from "../models/challenge";
import { returnApiConfig } from "../utils/challenges";

export const getChallengeText: () => Promise<getChallengeModel> = async () => {
  try {
    const config = returnApiConfig({ method: "GET" });
    const jsonResponse = await fetch(API_ENDPOINT, config);
    const response = await jsonResponse.json();
    return response;
  } catch (error: any) {
    return [FALLBACK_CHALLENGE];
    throw new Error(error); // This ensures we play the game without internet and application crashing
  }
};
