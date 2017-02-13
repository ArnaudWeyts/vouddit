/**
 * Accepts seconds and formats it for our video player
 * 
 * @param {int} secs
 * @returns {time} HH:MM:SS
 * 
 * @memberOf Player
 */
export function secToFormat(secs) {
  if (secs === null) {
    return '0:00';
  }
  const sec_num = parseInt(secs, 10)
  const hours = Math.floor(sec_num / 3600) % 24
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60
  return [hours, minutes, seconds]
    // filter out hours if it's 0
    .filter((t, index) => !(index === 0 && t === 0))
    // map over everything and put a 0 in front, except when
    // it's the first one
    .map((t, index) => (index > 0) && t < 10 ? "0" + t : t)
    .join(":");
}

/**
 * Debounce a function
 */
export function debounce(func, interval) {
  var lastCall = -1;
  return function () {
    clearTimeout(lastCall);
    var args = arguments;
    var self = this;
    lastCall = setTimeout(function () {
      func.apply(self, args);
    }, interval);
  };
}
