import { FC, memo } from "react";

interface DisplayChallengeTextProps {
  challengeText: string;
}

const DisplayChallengeText: FC<DisplayChallengeTextProps> = memo((props) => {
  const { challengeText } = props;
  return (
    <div
      role="display-challenge"
      className="card mb-[30px] h-[120px] overflow-y-scroll"
    >
      {challengeText}
    </div>
  );
});

DisplayChallengeText.displayName = "DisplayChallengeText";

export default DisplayChallengeText;
