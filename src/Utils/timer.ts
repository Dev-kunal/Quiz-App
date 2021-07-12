export const timer = () => {
  const expiryTimeStamp = new Date();
  expiryTimeStamp.setSeconds(expiryTimeStamp.getSeconds() + 30);
  return Number(expiryTimeStamp);
};
