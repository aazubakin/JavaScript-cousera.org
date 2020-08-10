/**
 * @param {String} date
 * @returns {Object}
 * Условия
В функцию всегда передается строка в правильном и полном формате. Дополнительных проверок не требуется.
Формат даты — "YYYY‒MM‒DD HH:SS", где YYYY — год, MM — месяц, DD — день, HH — час, SS — минуты
В функции add/subtract всегда передается целое число
Гарантируется, что после всех манипуляций получится корректная дата, которая будет не ранее 1 января 2000 года
Функции add/subtract
Каждая функция принимает первым аргументом количество единиц, на которое нужно изменить дату, а вторым — единицу измерения.

Можно менять следующие значения: years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)

Обработка ошибок
Если первый аргумент отрицательный, либо второй содержит неизвестную единицу измерения, функции должны выбросить исключение TypeError.

Подсказки
Решение задания не требует использования регулярных выражений, но с ними реализация может быть лаконичнее.

Даты
В реализации советуем использовать объект Date. В нём реализован правильный переход через месяц, год, час:


 */
module.exports = function (date) {
   var time = {
      value: date,
      add: function (count, val) {
         this.value = new Date(date);
         var year = this.value.getFullYear(),
            month = this.value.getMonth() + 1,
            day = this.value.getDate(),
            hour = this.value.getHours(),
            minutes = this.value.getMinutes();
         function calculateDate() {
            this.value = new Date(year, month, day, hour, minutes);
            month = this.value.getMonth() + 1; //return date after count;
            if (month < 10) month = '0' + month;
            return this.value.getFullYear() + '-' + month + '-' + this.value.getDate() + ' ' + this.value.getHours() + ':' + this.value.getMinutes();
         }
         if (val === 'years') {
            year += count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'months') {
            month += count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'days') {
            day += count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'hours') {
            hour += count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'minutes') {
            minutes += count;
            this.value = calculateDate();
            return this;
         }
      },
      subtract: function (count, val) {
         this.value = new Date(date);
         var year = this.value.getFullYear(),
            month = this.value.getMonth() + 1,
            day = this.value.getDate(),
            hour = this.value.getHours(),
            minutes = this.value.getMinutes();
         function calculateDate() {
            this.value = new Date(year, month, day, hour, minutes);
            month = this.value.getMonth() + 1; //return date after count;
            if (month < 10) month = '0' + month;
            return this.value.getFullYear() + '-' + month + '-' + this.value.getDate() + ' ' + this.value.getHours() + ':' + this.value.getMinutes();
         }
         if (val === 'years') {
            year -= count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'months') {
            month -= count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'days') {
            day -= count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'hours') {
            hour -= count;
            this.value = calculateDate();
            return this;
         }
         if (val === 'minutes') {
            minutes -= count;
            this.value = calculateDate();
            return this;
         }
      }
   };
   // time.subtract(14, 'months');
   //   console.log(time.value);
   return time;


};

//module.exports('2020-08-8 10:40');
