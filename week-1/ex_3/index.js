/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 * На вход функция принимает 3 параметра: часы, минуты, интервал в минутах, на который нужно изменить время.
Гарантируется, что любой из 3 параметров целое положительное число.
Параметр часы принимает значение в диапазоне [0, 23].
Параметр минуты принимает значение в диапазоне [0, 59].
Прибавляемый интервал может быть больше 60 минут.
Переход в следующие сутки должен корректно обрабатываться.
Функция должна возвращать корректно отформатированное время: 1:2 –> 01:02
 */
module.exports = function (hours, minutes, interval) {
   var minNew = minutes + interval;
   if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
      minutes += interval;
      hours += Math.floor(minutes / 60);

      minutes = minutes % 60;
      hours = hours % 24;

      if (hours < 10) {
         hours = '0' + hours;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      return hours + ':' + minutes;
   } else return false;
};


console.log(module.exports(23, 59, 1));