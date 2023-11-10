export const formatTime = (time: number | undefined) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formatMinutes = String(minutes).padStart(2, '0');
    const formatSeconds = String(seconds).padStart(2, '0');

    return `${formatMinutes}:${formatSeconds}`;
  }

  return '00:00';
};
