/*
const user = prompt('Кто пришел?', 'Админ');

if (user === 'Админ'){
    const password = prompt('Пароль?');

    if (password === 'Черный Властелин'){
        alert('Добро пожаловать');
    } else if(password === null){
        alert('Вход отменен');
    } else{
        alert('Пароль неверен');
    }
} else if(user === null){
    alert('Вход отменен');
} else{
    alert('Я вас не знаю');
}
*/


/********** Массив *********/
/*const numbers = [5, 6, 7, 8];
const first_elem = numbers[1];
console.log(first_elem);
console.log(numbers);*/

/*const countries = ['Kyrgyzstan', 'USA', 'Japan', 'China'];
countries[3] = 'Spain';
console.log(countries[3]);
console.log(countries);*/

/*const nums = [ [5,6,7], [8,9,10], [11,12,13] ];

console.log(nums.length);*/



const goods = [
    {
        name:'Iphone 13',
        price:800
    },
    {
        name:'Iphone 13 pro',
        price:950
    },
    {
        name:'Iphone 13 pro max',
        price: 1100
    }
]

goods.push({name:'iphone 14', price: 1200}, {name:'iphone 14 pro', price: 1300});

const elem = goods.pop();

goods.unshift({ name:'iphone 12', price:700 }, { name:'iphone 11', price:700 });

const deleted_elem = goods.shift();

console.log(goods);
console.log(deleted_elem);


// push, pop, unshift, shift



















