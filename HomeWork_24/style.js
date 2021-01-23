// Написать функцию, которая принимает 2 числа и возвращает - 1, если первое меньше, чем второе;
// 1 – если первое больше, чем второе; и 0 – если числа равны.
/*
let a = +prompt('Введите число 1');
let b = +prompt('Введите число 2');

function getPower(a, b) {
    if (a < b) {
        console.log("-1");
    } if (a > b) {
        console.log("1");
    } if (a == b) {
        console.log("0");
    }
}
let result = getPower(a, b)
*/

// Написать функцию, которая вычисляет факториал переданного ей числа.
/*
let num = +prompt('Введите число');

function factorial(num) {
    return (num != 1) ? num * factorial(num - 1) : 1;
}

console.log(factorial(num));
*/

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
/*
function getSquare(a, b = "") {
    if (a != "" && b != "") {
        let res = a * b;
        return res;
    } if (a != "" && b == "") {
        res = a * 2;
        return res;
    };
};

console.log(`Площадь прямоугольника ${getSquare(5, 3)}`);
console.log(`Площадь квадрата ${getSquare(5)}`);
*/

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.
/*
function getTransform(a = "1", b = "4", c = "9") {
    let result = a + b + c;
    console.log(result);
}
getTransform();
*/

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
/*
let hour = +prompt('Введите часы');
let min = +prompt('Введите минуты');
let sec = +prompt('Введите секунды');

function getTime(hour, min, sec) {
    if (hour < 10) {
        hour = "0" + hour;
    } if (min < 10) {
        min = "0" + min;
    } if (sec < 10) {
        sec = "0" + sec;
    };

    let result = hour + ":" + min + ":" + sec;
    return result;
}

let result = getTime(hour, min, sec);
console.log(result);
*/


// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
/*
let hour = +prompt('Введите часы');
let min = +prompt('Введите минуты');
let sec = +prompt('Введите секунды');

function getTime(hour, min, sec) {
    hour = hour * 60 * 60;
    min = min * 60;
    let result = hour + min + sec;
    return result;
}
let result = getTime(hour, min, sec);
console.log(result + " секунд");
*/

// Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
/*
let sec = +prompt('Введите секунды');

function getTime(sec) {
    let hour = Math.floor(sec / 60 / 60);
    let min = Math.floor((sec / 60) - (hour * 60));
    let second = sec % 60;
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let result = hour + ":" + min + ":" + second;
    return result;
}
let result = getTime(sec);
console.log(result);
*/