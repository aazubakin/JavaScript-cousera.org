let phoneBook = new Object();
phoneBook.nikita = new Object();
phoneBook.nikita.phones = new Set();


let nikitasPhonesSet = phoneBook['nikita']['phones'];
nikitasPhonesSet.add('123');
nikitasPhonesSet.add('456');


console.info('############');
console.info(phoneBook);