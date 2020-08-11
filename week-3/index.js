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
         var myList = new Set(['years', 'months', 'days', 'hours', 'minutes']);
         if (count > 0 && myList.has(val)) {
         } else throw new TypeError();

         this.value = new Date(this.value);
         var year = this.value.getFullYear(),
            month = this.value.getMonth() + 1,
            day = this.value.getDate(),
            hour = this.value.getHours(),
            minutes = this.value.getMinutes();

         function calculateDate() {
            // обход 30 дней в месяце
            if (!(month % 2) && day == 31 && month != 8) {
               day++;
            }
            this.value = new Date(year, month, day, hour, minutes);
            day = this.value.getDate();
            if (day < 10) day = '0' + day;
            hour = this.value.getHours();
            if (hour < 10) hour = '0' + hour;
            month = this.value.getMonth(); //return date after count;
            if (month < 10) month = '0' + month;
            minutes = this.value.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;
            return this.value.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
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
         var myList = new Set(['years', 'months', 'days', 'hours', 'minutes']);
         if (count > 0 && myList.has(val)) {
         } else throw new TypeError();

         this.value = new Date(this.value);
         var year = this.value.getFullYear(),
            month = this.value.getMonth() + 1,
            day = this.value.getDate(),
            hour = this.value.getHours(),
            minutes = this.value.getMinutes();

         function calculateDate() {
            if ((month % 2) && day < 0 || (month == 8 && day < 0)) {
               day--;
            }
            this.value = new Date(year, month, day, hour, minutes);
            day = this.value.getDate();
            if (day < 10) day = '0' + day;
            hour = this.value.getHours();
            if (hour < 10) hour = '0' + hour;
            month = this.value.getMonth(); //return date after count;
            if (month < 10) month = '0' + month;
            minutes = this.value.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;
            return this.value.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
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
   //console.log(time.add(2, 'light-years'));
   return time;
};

//console.log(module.exports('2016-04-26 15:00').add(5, 'days').subtract(5, 'days'));
