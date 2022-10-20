/*
1) Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»
*/

/*function hello(){
    let message = 'Привет, JavaScript!';
    return message;
}

let result = hello();
console.log(result);*/


/*2) Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/

/*
function cubeOfNumber(num) {
    let result = num * num * num;
    console.log(result);
}
cubeOfNumber(5);
cubeOfNumber(65);
cubeOfNumber(655);
*/


/*3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/

/*
function getName(userName = 'гость') {
    let str = `Привет ${userName}`;
    console.log(str);
}

let name = 'Василий';
getName(name);
getName();
*/

/*4) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
    example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
    example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

/*   function getDoubleNumbers(arr) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++){
            newArray.push(arr[i] * 2);
        }

        return newArray;
   }

   let result = getDoubleNumbers([1, 2, 3]);
   console.log(result);*/





/*const showMessage = () => {
    alert('Hello programmers');
}

showMessage();*/


const showMessage = a => {
    let result = a + a;
    return result;
}

showMessage(5);




