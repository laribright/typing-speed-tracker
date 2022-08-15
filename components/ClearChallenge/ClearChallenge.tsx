import { Dispatch, FC, SetStateAction } from "react";

import { useAppSelector } from "../../hooks/hooks";

interface ClearChallengeProps {
  setChallengeText: Dispatch<SetStateAction<string>>;
}

const ClearChallenge: FC<ClearChallengeProps> = (props) => {
  const { setChallengeText } = props;

  const { started: isChallengeStarted } = useAppSelector(
    (state) => state.challenge
  );

  return (
    <button
      disabled={isChallengeStarted}
      onClick={() => setChallengeText("")}
      className="text-[8px] disabled:cursor-not-allowed w-[100px] mx-auto my-2 bg-purple-400 text-white hover:-translate-y-1 transition-all duration-500 py-1 rounded-xl shadow-md"
      type="button"
    >
      Clear Challenge Text
    </button>
  );
};

export default ClearChallenge;
