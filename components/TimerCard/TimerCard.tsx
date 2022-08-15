import { FC, SetStateAction, Dispatch, memo } from "react";
import { useAppSelector } from "../../hooks/hooks";

import { secondsToMinute } from "../../utils/timeConverter";

interface TimerCardProps {
  numberOfSeconds: number;
  setTestTimer: Dispatch<SetStateAction<number>>;
}

const TimerCard: FC<TimerCardProps> = memo((props) => {
  const { numberOfSeconds, setTestTimer } = props;

  const { started: isChallengeStarted } = useAppSelector(
    (state) => state.challenge
  );

  const timerInMinute = secondsToMinute(numberOfSeconds);

  return (
    <div
      role="timer"
      onClick={
        isChallengeStarted ? () => null : () => setTestTimer(numberOfSeconds)
      }
      className="w-[60px] cursor-pointer text-white mr-3 font-medium grid place-content-center text-5xl text-center hover:-translate-y-1 duration-500 shadow-xl h-[100px] border border-white rounded-lg"
    >
      {timerInMinute}
    </div>
  );
});

export default TimerCard;
