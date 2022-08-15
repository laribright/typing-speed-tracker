import Image from "next/image";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import TimerIcon from "../../public/images/svg/timer.svg";
import { stopChallenge } from "../../redux/features/challenge/challengeSlice";
import { secondsInMinute, secondsToMinute } from "../../utils/timeConverter";

interface DisplayTimerProps {
  testTimer: number;
  nodejsTimer: any;
}

const DisplayTimer: FC<DisplayTimerProps> = (props) => {
  const { testTimer, nodejsTimer } = props;

  const dispatch = useAppDispatch();

  const ICON_CLASS_NAME =
    "cursor-pointer hover:scale-105 transition-all duration-500";

  const timerInMinutes = secondsToMinute(testTimer);
  const timerInSeconds = secondsInMinute(testTimer);
  const minuteText = timerInMinutes <= 1 ? "Min" : "Mins";
  const secsText = timerInSeconds <= 1 ? "Sec" : "Secs";
  const isTimerElapse = timerInMinutes === 0 && timerInSeconds === 0;
  const isTimerRunningOut =
    timerInMinutes === 0 && timerInSeconds < 60 && timerInSeconds !== 0;
  const timerRunningOutColor = isTimerRunningOut ? "text-red-600" : "";

  if (isTimerElapse) {
    clearInterval(nodejsTimer);
    dispatch(stopChallenge());
  }

  return (
    <div className="flex items-center">
      <Image
        src={TimerIcon}
        alt="timer_icon"
        className={ICON_CLASS_NAME}
        width="70"
        height="40"
      />
      <p className="text-white font-medium text-3xl">
        {timerInMinutes} {minuteText} :{" "}
        <span
          className={`${timerRunningOutColor} ${
            isTimerRunningOut && "text-5xl animate-ping"
          }`}
        >
          {timerInSeconds}
        </span>{" "}
        {secsText}
      </p>
    </div>
  );
};

export default DisplayTimer;
