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

 */
module.exports = function (command) {
   // ...
   var comandArr = command.split(/ |, /);
   var commandName = comandArr[0];
   var result = [];
   var removed = false;
   //console.log(commandName);
   // ...
   // Обработка команды ADD
   function addPhone() {
      for (let i = 1; i < comandArr.length - 1; i++) {
         if (comandArr[1] in phoneBook) {
            phoneBook[comandArr[1]] += ', ' + comandArr[i + 1];
         } else {
            phoneBook[comandArr[1]] = comandArr[2];
         }
      }
      result.push(phoneBook[comandArr[1]]);
   }
   // Продолжить здесь -----------------------------------------------------------------------
   function removePhone() {
      let index = 0;
      for (let key in phoneBook) {
         index = phoneBook[key].indexOf(comandArr[1]);
         if (index || index === 0) {
            phoneBook[key] = phoneBook[key].replace(phoneBook[key].slice(index, index + 11), '');
            removed = true;
         }
      }
   }

   function showItem() {
      let show;
      for (let key in phoneBook) {
         show = key + ': ' + phoneBook[key];
         result.push(show);
      }
   }

   if (commandName === 'ADD') {
      // ...
      addPhone();
      console.log(result);
      // ...Обработка других команд... 
      return result;
   }
   if (commandName === 'REMOVE_PHONE') {
      removePhone();
      return removed;
   }
   if (commandName === 'SHOW') {
      //showItem();
      console.log(result);
      return result;
   }

};



module.exports('ADD Ivan 555-10-01, 555-10-03');
//module.exports('SHOW');
//   module.exports('ADD Alex 555-10-02');
 //  module.exports('SHOW');
//   module.exports('REMOVE_PHONE 555-10-03');
//      module.exports('SHOW'); 