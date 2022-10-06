/************ && ***********/
/*
const x = 15;
const y = 'javascript';
const result = x === 15 && y === 'javascript';
console.log(result); //true

const user_name = 'Maks';
const user_age = 20;
const result2 = user_name === 'Ulan' && user_age > 18;
console.log(result2); //false

1) true + true = true;
2) false + true = false;
3) true + false = false;
4) false + false = false;
*/


/************ || ***********/
/*const num1 = 5;
const num2 = 10;
console.log(num1 > num2 || num1 === 10); //false

const car_name = 'bmw';
const car_color = 'red';
console.log(car_name === 'bmw' || car_color === 'black'); //true

1) true + false = true;
2) false + true = true;
3) true + true = true;
4) false + false = false;*/


/************ ! ***********/
/*const result = !(10 > 5);
console.log(result); //false*/

/************ &&= ***********/
/*let result = 76;
result &&= 5;

console.log(result);*/

/************ ||= ***********/
/*let x = 'test';
x ||= 'hello';

console.log(x);*/

/************ ??= ***********/
/*let age = 35;
age ??= 29;

console.log(age);*/


/************ Условные конструкции ***********/
/*let age = 19;
if(age > 18){
    alert('Вам больше 18');
}*/


/*
let age = 17;
if (age >= 18){
    alert('Вы уже большой');
} else {
    alert('Вы не можете участвовать');
}
*/


let income = 500;

if (income < 200){
    alert('Ниже среднего');
} else if(income >= 200 && income <= 400){
    alert('Средний');
} else{
    alert('Выше среднего');
}









