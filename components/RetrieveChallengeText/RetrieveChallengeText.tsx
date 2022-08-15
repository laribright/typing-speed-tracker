import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

import PasteIcon from "../../public/images/svg/paste.svg";
import ClearChallenge from "../ClearChallenge/ClearChallenge";

interface RetrieveChallengeTextProps {
  setChallengeText: Dispatch<SetStateAction<string>>;
  challengeText: string;
}

const RetrieveChallengeText: FC<RetrieveChallengeTextProps> = (props) => {
  const { setChallengeText, challengeText } = props;

  return (
    <div className="w-full flex flex-col place-content-center p-2 rounded-2xl bg-[rgba(255,255,255,0.7)] border border-white">
      <Image src={PasteIcon} alt="paste_icon" width="20" height="20" />
      <input
        type="text"
        value={challengeText}
        onChange={(event) => setChallengeText(event.target.value)}
        placeholder="paste"
        className="placeholder:uppercase h-[45px] text-[12px] bg-none rounded-sm mt-2 focus:outline-none px-2"
      />
      <ClearChallenge setChallengeText={setChallengeText} />
    </div>
  );
};

export default RetrieveChallengeText;
