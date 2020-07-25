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
   var tempArr = [];
   var str;
   newArr = hashtags.map(function (x) {
      return x.toLowerCase();
   });
   tempArr = newArr.map(function (x) { return x });
   // сравниваем элементы массивов и удаляем повторы
   for (var i = 0; i < newArr.length; i++) {
      for (var j = i + 1; j < tempArr.length; j++) {
         if (newArr[i] === tempArr[j + 1]) {
            tempArr.splice(j + 1, 1);
         }
      }
   }
   // добавляем пробелы 
   for (var i = 1; i < tempArr.length; i++) {
      tempArr[i] = ' ' + tempArr[i];
   }
   return tempArr.join();
}