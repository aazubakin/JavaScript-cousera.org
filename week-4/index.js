/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection) {
    if (arguments.length === 1) return collection.slice();
    var col = collection.slice();  
    var operations = Array.from(arguments).slice(1);   
    var result = operations.sort().reduce(function(acc,item) {
      return  item(acc);    
    },col); 
    
   
    return result;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [...arguments];
    return function select(collection) {
        var col = [];
        for (var i = 0; i < collection.length; i++) {
            var obj = {};
            fields.forEach(function (elem) {
                if (elem in collection[i]) {
                    obj[elem] = collection[i][elem];
                }
            });
            col.push(obj);
        }
        return col;
    }
}
/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var fields = [...arguments];
    return function filterIn(collection){
        var col = [];
        collection.forEach(function (elemObj) {
            var obj = {};
            for (var i = 1; i < fields.length; i++) {
                if (elemObj[fields[0]] === fields[i]) {
                    obj = elemObj;
                }
            }
            if (Object.keys(obj).length !== 0) col.push(obj);
        });
        return col;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

