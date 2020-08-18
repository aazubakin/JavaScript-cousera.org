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
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

function query(collection) {
    if (arguments.length === 1) return collection;
    var col = collection.slice();  
    //console.log(col);
    var funct = [...arguments].slice(1);   
    var result = funct.sort().reduce(function(acc, elem) { 
        return  elem(acc); 
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
            for (var i = 0; i < values.length; i++) {
                if (elemObj[fields[0]] === values[i]) {
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

//console.log(query(friends,select('name', 'gender', 'email'), 
//            filterIn('favoriteFruit',['Яблоко', 'Картофель'])   ));