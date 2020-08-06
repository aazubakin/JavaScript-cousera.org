// Телефонная книга
var phoneBook = {};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 *  В этом задании необходимо реализовать функцию, через которую можно управлять телефонной книгой.

   Для управления телефонной книгой нужно реализовать три команды:

   ADD — добавляет контакт
   REMOVE_PHONE — удаляет номер
   SHOW — возвращает содержимое телефонной книги

   Условия

   Гарантируется, что функция будет вызываться корректно, только со списком перечисленных команд. Корректность входных данных проверять не нужно.
   Имя команды пишется большими буквами, параметры разделяются одним пробелом.
   Гарантируется уникальность добавляемых телефонов.
   ***
   Команда ADD
   Добавляет контакт в телефонную книгу со списком телефонов. Телефоны перечисляются через запятую. Если такой контакт существует, то команда пополняет список телефонов контакта.
   ***
   Команда REMOVE_PHONE
   Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. 
   Если такого телефона в телефонной книге не существует, то возвращается false.
   ***
   Команда SHOW
   Возвращает массив контактов с их телефонами. Массив содержит строчки вида: "Имя: Телефон1, Телефон2". Массив должен быть отсортирован по имени контакта. Телефоны идут в порядке добавления их в телефонную книгу. Контакт с пустым списком телефонов не должен возвращаться.
var phoneBook = require('./index.js');

phoneBook('ADD Ivan 555-10-01,555-10-03');

phoneBook('ADD Ivan 555-10-02');

console.info(phoneBook('SHOW'));

// Вывод:

// ["Ivan: 555-10-01, 555-10-03, 555-10-02"]

phoneBook('REMOVE_PHONE 555-10-03');

phoneBook('ADD Alex 555-20-01');

phoneBook('SHOW');

// Вывод:

// ["Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"]

phoneBook('REMOVE_PHONE 555-20-01');

phoneBook('SHOW');

// Вывод:

// ["Ivan: 555-10-01, 555-10-02"]
 */
num = new Set();
module.exports = function (command) {
   // ...
   var comandArr = command.split(/ |,|, /);
   var commandName = comandArr[0];
   comandArr.shift();
   var result = [];
   var removed = false;
   var res = [];
   //---------------------------------
   var name;
   var numbers = new Set();
   // стандартная функция объединения двух сетов
   function union(setA, setB) {
      var _union = new Set(setA);
      for (var elem of setB) {
         _union.add(elem);
      }
      return _union;
   }

   // ...
   // Обработка команды ADD
   function addPhone() {
      name = comandArr[0];
      for (var i = 1; i < comandArr.length; i++) {
         numbers.add(comandArr[i]);
      }
      if (name in phoneBook) {
         phoneBook[name] = union(phoneBook[name], numbers);
      } else phoneBook[name] = numbers;
      console.log(phoneBook);
   }

   //Обработка команды REMOVE 
   function removePhone() {
      for (var i = 0; i < comandArr.length; i++) { //возможность удаления нескольких телефонов за раз
         if (phoneBook.has(comandArr[i])) {
            phoneBook.delete(comandArr[i]);
            removed = true;
         }
      }
   }
   //Обработка команды SHOW
   function showItem() {
      var resNamesIndex = [];
      var resNumbers = [];
      var resNames = [];
      //получаем имена 
      for (var i = 0; i < result.length; i++) {
         if (result[i].search(/[a-z]/) !== -1) {
            resNamesIndex.push(i);
            resNames.push(result[i]);
         }
      }
      //получаем номера телефонов
      for (i = 0; i <= resNamesIndex.length - 1; i++) {
         resNumbers.push(result.slice(resNamesIndex[i] + 1, resNamesIndex[i + 1]).join(', '));
      }
      //соединяем имя с группой телефонов
      for (i = resNumbers.length - 1; i != -1; i--) {
         //не выводить имени если номер удален
         if (resNumbers[i] == '') {
            continue;
         }
         res.push(result[resNamesIndex[i]] + ' ' + resNumbers[i]);
      }
   }

   if (commandName === 'ADD') {
      // ...
      addPhone();
      //return result;
   }
   if (commandName === 'REMOVE_PHONE') {
      removePhone();
      return removed;
   }
   if (commandName === 'SHOW') {
      result = [...phoneBook];
      showItem();
      console.log(res);
      return res;
   }
};

/*Failed tests: 
После команд "ADD Ivan 555,666; ADD Alex 777; ADD Alex 333; ADD Ivan 444; SHOW", ожидается результат: 
["Alex: 777, 333","Ivan: 555, 666, 444"]
После команд "ADD Ivan 555,666; ADD Alex 777; ADD Alex 333; REMOVE_PHONE 555; REMOVE_PHONE 666; ADD Ivan 888; SHOW", ожидается результат: 
["Alex: 777, 333","Ivan: 888"]
*/

module.exports('ADD Ivan 555,666');
module.exports('ADD Alex 777');
module.exports('ADD Alex 333');
module.exports('ADD Ivan 444');
//module.exports('SHOW');

/*
module.exports('ADD Ivan 555-10-01,555-10-03');
module.exports('ADD Ivan 555-10-02');
module.exports('SHOW');
module.exports('REMOVE_PHONE 555-10-03');
module.exports('ADD Alex 555-20-01');
module.exports('SHOW');
module.exports('REMOVE_PHONE 555-20-01');
module.exports('SHOW'); */