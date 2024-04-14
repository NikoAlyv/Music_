export const convertTime = (time: number): string => {
  const minuets = Math.floor(time / 60);
  const seconds = time % 60;

  if (seconds < 10) {
    return `${minuets}:0${seconds}`;
  }

  return `${minuets}:${seconds}`;
};
