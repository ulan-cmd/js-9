/********* тернарный оператор  ?  *********/
/*
let age = 42;
let access = age > 18 ? 'Можно входить' : 'Нельзя';
console.log(access);*/

/*
let a = 5;
let b = 'test';
let x = b / a;
let name = ' ';

console.log(x);

if(name){
    alert('переменная name = true');
} else{
    alert('переменная name = false');
}
*/


/********* Тип данных - Объект  *********/
/*
* number, string, undefined, null, boolean, object, bigint, symbol
* */

/*let user = {};
console.log(typeof user);
user.name = 'Maks';
user.surname = 'Maksov';
user.isProgrammer = true;
user.age = 35;

console.log(user);*/

let user = {
    name:'Maks',
    surname:'Maksov',
    isProgrammer:true,
    age:35
}

let result = 'hobby' in user;

console.log(result);

/*console.log(user);

delete user.isProgrammer;

console.log(user);*/
















