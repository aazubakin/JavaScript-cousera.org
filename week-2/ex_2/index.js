/**
 * @param {String[]} hashtags
 * @returns {String}
 * В этом задании необходимо убрать повторения из списка хештегов и привести их к нижнему регистру. Результатом должна быть строка. Хештеги в строке должны быть разделены запятой и пробелом: `tag1, tag2, tag3`.
 * Условия
Гарантируется, что массив содержит только хештеги.
Массив может быть пустым. В этом случае должна вернуться пустая строка.
Хештег — непустая строка, состоящая из одного слова.
Повторяющиеся хештеги нужно игнорировать.
При сравнении хештегов следует игнорировать регистр букв.
Порядок хештегов из исходного массива должен сохраниться.
 */

module.exports = function (hashtags) {
   var newArr = [];
   var mySet = new Set();
   newArr = hashtags.map(function (x) {
      return x.toLowerCase();
   });
   mySet.add(newArr[0]);
   // удаляем повторениe
   for (var i = 1; i < newArr.length; i++) {
      if (mySet.has(newArr[i])) {
      } else {
         mySet.add(newArr[i]);
      }
   }
   /*for (var i = 0; i < newArr.length; i++) {
      if (!str.indexOf(newArr[i])) {
         result.push(newArr[i]);
      }
   }*/
   newArr = [...mySet];
   // добавляем пробелы 
   for (var i = 1; i < newArr.length; i++) {
      newArr[i] = ' ' + newArr[i];
   }
   return newArr.join();
}