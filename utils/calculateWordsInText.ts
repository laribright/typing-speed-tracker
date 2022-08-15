import stringToArray from "./stringToArray";

const calculateWordsInText = (text: string) => {
  if (text.trim().length) {
    const textLength = stringToArray(text).length;
    return textLength;
  } else {
    return 0;
  }
};

export default calculateWordsInText;
