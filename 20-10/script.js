/*
Составьте программу, которая принимает с клавиатуры числа, пока не будет
введено значение 0.
Для каждого введенного с клавиатуры положительного числа, программа должна
выводить на экран "плюс", для каждого отрицательного – "минус".
    Например: ввод: 7, 14, -18, 0 ⇒ вывод: плюс, плюс, минус
*/

/*const sortValues = () => {
    let number = +prompt('Введите число?');

    if (number < 0){
        alert('минус');
        sortValues();
    } else if(number > 0 && number !== 0){
        alert('плюс');
        sortValues();
    }
}

sortValues();*/


/********** методы массивов **********/

/*const countries = ['Kyrgyzstan', 'China', 'USA', 'England'];
console.log(countries[2]);*/

// const numbers = [10,20,30,40,50];
/*const double = numbers.map(function (item, index) {
    if (item === 10){
        return 'Десять';
    } else if(item === 20){
        return 'Двадцать';
    } else if(item === 30){
        return 'Тридцать';
    } else{
        return 'Я не знаю';
    }
})*/

/*const double = numbers.map(function (item) {
    return item * 2;
})

const double2 = numbers.map(item => item * 2);

console.log(double);
console.log(double2);*/

/*

function (item, index) {
    console.log(item);
    console.log(index);
}

* 1) item = 10, index = 0;
  2) item = 20, index = 1;
  3) item = 30, index = 2:

*
* */



const prices = [10,20,30,100,150,15,65];

const elems = prices.filter(function (item) {
    return item > 50;
})

const elems2 = prices.filter(item => item > 50);

console.log(elems);
console.log(elems2);











