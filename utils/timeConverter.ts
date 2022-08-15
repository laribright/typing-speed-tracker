const AMinuteInSecs = 60;

export const minuteToSeconds = (minute: number) => {
  const minuteToSeconds = minute * AMinuteInSecs;
  return minuteToSeconds;
};

export const secondsToMinute = (seconds: number) => {
  const secondsToMinute = Math.floor((seconds % 3600) / AMinuteInSecs);
  return secondsToMinute;
};

export const secondsInMinute = (seconds: number) => {
  const secondsInMinute = Math.floor((seconds % 3600) % AMinuteInSecs);
  return secondsInMinute;
};
