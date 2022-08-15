import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

import RefreshIcon from "../../public/images/svg/refresh.svg";
import PlayIcon from "../../public/images/svg/play.svg";
import Timer from "../Timer/Timer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { startChallenge } from "../../redux/features/challenge/challengeSlice";

const ICON_CLASS_NAME =
  "cursor-pointer hover:scale-105 transition-all duration-500";

interface ChallengeTextControls {
  testTimer: number;
  setTestTimer: Dispatch<SetStateAction<number>>;
  setNodejsTimer: Dispatch<any>;
  updateChallengeText: () => Promise<void>;
  nodejsTimer: any;
}

const ChallengeTextControls: FC<ChallengeTextControls> = (props) => {
  const {
    testTimer,
    setTestTimer,
    setNodejsTimer,
    updateChallengeText,
    nodejsTimer,
  } = props;

  const { started: isChallengeStarted } = useAppSelector(
    (state) => state.challenge
  );
  const dispatch = useAppDispatch();

  const startTestTimer = () => {
    if (testTimer === 0) return;
    dispatch(startChallenge());
    const timerInterval = setInterval(() => {
      setTestTimer((currentCount) => --currentCount);
    }, 1000);
    setNodejsTimer(timerInterval);
  };

  useEffect(() => {
    if (!isChallengeStarted) clearInterval(nodejsTimer);
    return () => clearInterval(nodejsTimer);
  }, [nodejsTimer, isChallengeStarted]);

  return (
    <div className="items-center flex justify-around mr-2 p-1 rounded-2xl h-[100px]">
      <Image
        src={RefreshIcon}
        alt="refresh_icon"
        className={ICON_CLASS_NAME}
        width="70"
        height="40"
        onClick={isChallengeStarted ? () => null : updateChallengeText}
      />

      <Timer testTimer={testTimer} nodejsTimer={nodejsTimer} />

      <Image
        onClick={isChallengeStarted ? () => null : startTestTimer}
        src={PlayIcon}
        alt="play_icon"
        className={ICON_CLASS_NAME}
        width="50"
        height="50"
      />
    </div>
  );
};

export default ChallengeTextControls;
