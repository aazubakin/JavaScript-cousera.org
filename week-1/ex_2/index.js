/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
   hours = Number(hours);
   minutes = Number(minutes);
   if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
      return true;
   } else {
      return false;
   };
};
