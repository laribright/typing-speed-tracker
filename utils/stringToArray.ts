const stringToArray = (text: string) => {
  if (!text.trim()) return [];
  const stringArray = text.trim().split(" ");
  return stringArray;
};

export default stringToArray;
