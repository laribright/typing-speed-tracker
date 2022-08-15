import { ChangeEventHandler, FC, memo } from "react";
import { useAppSelector } from "../../hooks/hooks";

interface UserChallengeInputSolutionProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const UserChallengeInputSolution: FC<UserChallengeInputSolutionProps> = memo(
  (props) => {
    const { onChange } = props;

    const { started: isChallengeStarted } = useAppSelector(
      (state) => state.challenge
    );

    return (
      <textarea
        id="text-area"
        role="text-area"
        disabled={!isChallengeStarted}
        onChange={onChange}
        placeholder="Type here when you start test. (Casing matters)"
        className="card disabled:bg-[#ccc] disabled:cursor-not-allowed resize-none"
      />
    );
  }
);

export default UserChallengeInputSolution;
