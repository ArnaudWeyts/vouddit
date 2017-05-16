/**
 * Accepts seconds and formats it for our video player
 * 
 * @param {int} secs
 * @returns {time} HH:MM:SS
 * 
 * @memberOf Player
 */
export function secToFormat(secs: number) {
  if (secs === null) {
    return '0:00';
  }
  const secNum = Math.floor(secs);
  const hours = Math.floor(secNum / 3600) % 24;
  const minutes = Math.floor(secNum / 60) % 60;
  const seconds = secNum % 60;
  return (
    [hours, minutes, seconds]
      // filter out hours if it's 0
      .filter((t, index) => !(index === 0 && t === 0))
      // map over everything and put a 0 in front, except when
      // it's the first one
      .map((t, index) => (index > 0 && t < 10 ? '0' + t : t))
      .join(':')
  );
}

/**
 * Debounce a function
 */
export function debounce(func: any, interval: number) {
  let lastCall = -1;
  return function (this: void) {
    clearTimeout(lastCall);
    const args = arguments;
    const self = this;
    lastCall = window.setTimeout(
      () => {
        func.apply(self, args);
      },
      interval);
  };
}
