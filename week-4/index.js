/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    }
]

function query(collection) {

}

/**
 * @params {String[]}
 */
function select() {
    var fields = [...arguments];
    var col = [];
    for (var i = 0; i < friends.length; i++) {
        var obj = {};
        fields.forEach(function (elem) {
            if (elem in friends[i]) {
                obj[elem] = friends[i][elem];
            }
        });
        col.push(obj);
    }
    return col;
}
/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var fields = [...arguments];
    var col = [];
    friends.forEach(function (elemObj) {
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
/*
module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
*/
console.log(select('name', 'gender'));
console.log(filterIn('name', 'Сэм'));