var block = {
   innerHeight: 300,

   getHeight: function () {
      return this.innerHeight;
   }
};

innerHeight = 1280;
//console.log(block.getHeight());
var getHeight = block.getHeight;
//console.log(getHeight());

var mike = {
   age: 24,
   getAge: function () {
      return this.age;
   }
}

var anna = {
   age: 21
}

//console.log(mike.getAge.call(anna));

var arr = [4, 7, 3, 9];
//console.info(Math.min.apply(null, arr));
name = 'Alex';
var person = {
   name: 'Sergey',
   items: ['keys', 'phone', 'banana'],
   showItems: function () {
      this.items.map(function (item) {
         return this.name + ' has' + item;
      });
   }
};
//console.log(person.showItems());
/*
var logger = {
   logs: []
};
arg = function () {
   this.logs.push('event happens');
};
arg.call(logger);
//console.log(logger);
*/

var notifications = {
   counter: 0,
   count: function () {
      this.counter++;
   }
};

var logger = {
   logs: []
};

var clients = [
   [notifications, notifications.count],
   [logger, function () { this.logs.push('Произошло новое событие new_notification'); }],
   [logger, function () { this.logs.push('Добавлена новая нотификация. Количество - ' + notifications.counter); }]
];

for (var i = 0; i < clients.length; i++) {
   clients[i][1].call(clients[i][0]);
}
console.log(clients);
