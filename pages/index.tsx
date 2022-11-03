import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Head from "next/head";

import ChallengeText from "../components/ChallengeText/ChallengeText";
import RetrieveChallengeText from "../components/RetrieveChallengeText/RetrieveChallengeText";
import { getChallengeText } from "../services/challenge";
import ChallengeResult from "../components/ChallengeResult/ChallengeResult";
import ChallengeTextControls from "../components/ChallengeTextControls/ChallengeTextControls";
import TimerCard from "../components/TimerCard/TimerCard";
import UserChallengeInputSolution from "../components/UserChallengeInputSolution/UserChallengeInputSolution";
import { calculatePoints } from "../utils/challenges";
import { minuteToSeconds } from "../utils/timeConverter";
import { useAppSelector } from "../hooks/hooks";
import {
  CHALLENGE_TIME_IN_SECONDS,
  FALLBACK_CHALLENGE,
} from "../constants/challenge";
import calculateWordsInText from "../utils/calculateWordsInText";

const Home: NextPage = () => {
  const [challengeText, setChallengeText] = useState<string>("");
  const [testTimer, setTestTimer] = useState(0);
  const [userChallengeTextSolution, setUserChallengeTextSolution] =
    useState("");
  const [nodejsTimer, setNodejsTimer] = useState<any>(undefined);

  const { started: isChallengeStarted } = useAppSelector(
    (state) => state.challenge
  );

  const userTimeInputRef = useRef<HTMLInputElement>(null);

  const totalChallengeWords = calculateWordsInText(challengeText);

  const updateUserChallengeText = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setUserChallengeTextSolution(event.target.value);

  const updateChallengeText = async () => {
    const response = await getChallengeText();
    setChallengeText(response[0]);
  };

  const points = calculatePoints(userChallengeTextSolution, challengeText);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isChallengeStarted) return;
    if (userTimeInputRef.current?.value) {
      const convertedTimeToSeconds = minuteToSeconds(
        +userTimeInputRef.current?.value
      );
      setTestTimer(convertedTimeToSeconds);
    }
  };

  useEffect(() => {
    (async () => {
      await updateChallengeText();
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Typing Speed Game</title>
        <meta name="description" content="Typing speed game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-10 grid-cols-6">
        <div className="col-span-4">
          <div className="flex flex-col justify-between">
            <ChallengeText challengeText={challengeText} />
            <UserChallengeInputSolution onChange={updateUserChallengeText} />
          </div>
          <ChallengeTextControls
            testTimer={testTimer}
            setTestTimer={setTestTimer}
            updateChallengeText={updateChallengeText}
            setNodejsTimer={setNodejsTimer}
            nodejsTimer={nodejsTimer}
          />
          <div className="mt-6">
            <h6 className="text-sm mb-4 text-white">
              Choose Time or Enter custom time - (minimum 1 minute) <br />{" "}
              <span className="text-[11px]">All time in minute</span>
            </h6>
            <form className="flex" onSubmit={onFormSubmit}>
              {CHALLENGE_TIME_IN_SECONDS.map((challengeTime) => (
                <TimerCard
                  key={challengeTime}
                  numberOfSeconds={challengeTime}
                  setTestTimer={setTestTimer}
                />
              ))}
              <input
                type="number"
                disabled={isChallengeStarted}
                ref={userTimeInputRef}
                className="w-[60px] text-white bg-transparent focus:outline-none mr-3 font-medium grid place-content-center text-5xl text-center hover:-translate-y-1 duration-500 shadow-xl h-[100px] border border-white rounded-lg"
              />
              <button
                type="submit"
                className="hover:scale-105 disabled:cursor-not-allowed transition-all duration-500 ease-linear bg-purple-400 text-white text-sm font-bold hover:shadow-lg w-[60px] rounded-lg"
              >
                Use custom time
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex w-full justify-between lg:h-[120px]">
            <RetrieveChallengeText
              challengeText={challengeText}
              setChallengeText={setChallengeText}
            />
          </div>
          <div className="h-[380px] flex justify-between mt-[30px]">
            <ChallengeResult
              points={points}
              totalChallengeWords={totalChallengeWords}
              testTimer={testTimer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
