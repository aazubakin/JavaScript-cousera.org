tweet = {};

Object.defineProperty(tweet, 'text', {
   value: 'Ого сколько много фронтендеров!'
});

console.info(Object.getOwnPropertyDescriptor(tweet, 'text'));

try {
   throw new Error('Ошибка');
   console.log('Привет!')
} catch (err) {
   console.log(err.message);
}