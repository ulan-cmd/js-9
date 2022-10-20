/*
let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора.
*/

/*let data = true;
let number = data === true ? 3 : 5;
console.log(number);*/

/********** for *********/
/*for(let i = 0; i < 5; i++){
    console.log(i);
}*/


/*
* 1. let i = 0;
*    0 < 5
*    console.log(i); 0
*
* 2. i++
*    1 < 5;
*    console.log(i); 1
*
* 3. i++
*    2 < 5;
*    console.log(i); 2
*
* 4. i++
*    3 < 5;
*   console.log(i); 3
*
* 5. i++
*    4 < 5;
*    console.log(i); 4
*
* 6. i++
*    5 < 5
*    выход-завершается цикл
* */



/*for(let i = 5; i >= 0; i--){
    console.log(i);
}*/



/*
* 1. let i = 5;
*    5 >= 0;
*    console.log(i); 5
*
* 2. i--;
*    4 >= 0;
*    console.log(i); 4
*
* 3. i--;
*    3 >= 0;
*    console.log(i); 3
*
* 4. i--;
*    2 >= 0;
*   console.log(i); 2
*
* 5. i--;
*    1 >= 0;
*    console.log(i); 1
*
* 6. i--;
*    0 >= 0;
*    console.log(i); 0
*
* 7. i--;
*    -1 >= 0;
*    выход-завершение цикла
* */

/********** for in *********/
/*
let countries = ['Kyrgyzstan', 'China', 'USA', 'Russia', 'Portugal'];
for(let index in countries){
    console.log(countries[index]);
}

*/

/*
* 1. let index = 0;
*    console.log(countries[0]);  Kyrgyzstan
*
* 2. index = 1;
*   console.log(countries[1]);   China
*
* 3. index = 2;
*    console.log(countries[2]);  USA
*
* 4. index = 3;
*    console.log(countries[3]);  Russia
*
* 5. index = 4;
*    console.log(countries[4]);  Portugal
* */


/********** for of *********/

/*let users = ['Admin', 'Director', 'Manager'];

for(let value of users){
    console.log(value);
}*/

/*
* 1. let value = 'Admin';
*    console.log(value);  'Admin'
*
* 2.  value = 'Director';
*     console.log(value);  'Director'
*
* 3.  value = 'Manager';
*     console.log(value);  'Manager'
* */


/********** while *********/
let users = [
    {
        name:'Имран',
        surname:'Ашимов',
        email:'imran@gmail.com',
        phone:'+996555123456'
    },
    {
        name:'Руфат',
        surname:'Ашимов',
        email: 'rufat@gmail.com',
        phone:'+996559555666'
    },
    {
        name:'Улан',
        surname:'Жумабаев',
        email:'ulan@gmail.com',
        phone: '+996555905013'
    }
]

let i = 0;
while (i < 3){
    let userName = users[i].name;
    let userPhone = users[i].phone;
    console.log(userName, userPhone);
    i++;
}

/*
* 1. 0 < 3
*    Имран +996555123456
*    i++;
*
* 2. 1 < 3
*    Руфат +996559555666
*    i++;
*
* 3. 2 < 3
*    Улан +996555905013
*    i++;
*
* 4. 3 < 3
*    выход-завершение цикла
*
* */











