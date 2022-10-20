/*
Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
И эти найденные четные числа должны быть собраны в одном массиве.
*/

/*
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let new_numbers = [];

for(let i = 0; i < numbers.length; i++){
    if (!(numbers[i] % 2)){
        new_numbers.push(numbers[i]);
    }
}

console.log(new_numbers);*/

/********* Do While *********/

/*let users = ['Ulan', 'Imran', 'Sasha', 'Rufat'];
let index = 0;

do{
    let userName = users[index];
    console.log(userName);
    index++;
} while(index < users.length);*/


/********* break *********/
/*const numbers = [1,2,3,4,9,15,8,22,5];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 10){
        break;
    }

    console.log(numbers[i]);
}*/


/********* continue *********/
/*const numbers = [1,2,3,4,9,15,8,22,5];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > 10){
        continue;
    }

    console.log(numbers[i]);
}*/


/********* функции *********/

/*
function showMessage() {
    document.write('Наша первая функция');
}


showMessage();
*/


/*
function showNotification(message = 'good morning') {
    alert(message);
}

showNotification('Hello');
showNotification('Hello world');
showNotification();
*/


/*
function display() {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

display(5, 6);
*/

function getSum(x, y) {
    return x + y;
}

let result = getSum(5, 15);
console.log(result);

















