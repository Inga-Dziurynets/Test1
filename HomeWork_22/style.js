/*Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/
/*
let age = +prompt('Укажите ваш возраст');

if (age == 0) {
    console.log('Еще не родился');
} else if (age <= 2) {
    console.log('Младенец');
} else if (age <= 10) {
    console.log('Ребенок');
} else if (age <= 18) {
    console.log('Подросток');
} else if (age <= 60) {
    console.log('Взрослый');
} else if (age > 60) {
    console.log('Пенсионер');
} else {
    console.log('Введите корректный возраст');
}
*/
/*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/
/*
let num = +prompt('Укажите число от 0 до 9');

if (num == 1) {
    console.log('Ваш символ: !');
} else if (num == 2) {
    console.log('Ваш символ: @');
} else if (num == 3) {
    console.log('Ваш символ: #');
} else if (num == 4) {
    console.log('Ваш символ: $');
} else if (num == 5) {
    console.log('Ваш символ: %');
} else if (num == 6) {
    console.log('Ваш символ: ^');
} else if (num == 7) {
    console.log('Ваш символ: &');
} else if (num == 8) {
    console.log('Ваш символ: *');
} else if (num == 9) {
    console.log('Ваш символ: (');
} else if (num == 0) {
    console.log('Ваш символ: )');
} else {
    console.log('Введено не корректное значение');
}*/

/*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let num = +prompt('Укажите число');

let num1 = Math.trunc(num / 100);
let num2 = Math.trunc(num / 10) % 10;
let num3 = num % 10;

if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log('Найдено совпадение цифр');
} else {
    console.log('Совпадений не найдено');
}
/*

/*Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let num = +prompt('Укажите сумму покупки');
let disc;

if (num < 200) {
    console.log(`Скидка не предоставляется. Сумма покупики составляет: ${num} грн.`);
} else if (num < 300) {
    disc = num * 0.03;
    console.log(`Ваша сумма со скидкой составляет ${num - disc} грн.`);
} else if (num < 500) {
    disc = num * 0.05;
    console.log(`Ваша сумма со скидкой составляет ${num - disc} грн.`);
} else if (num > 500) {
    disc = num * 0.07;
    console.log(`Ваша сумма со скидкой составляет ${num - disc} грн.`);
} else {
    console.log('Вы ничего не купили');
}*/

/*Запросить у пользователя год и проверить, високосный он или нет.
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = +prompt('Укажите год');
let count = Number.isInteger(year / 4);

if ((Number.isInteger(year / 4)) && (!Number.isInteger(year / 100))) {

    console.log('Високосный год');
} else {
    console.log('Не високосный год');
}*/

/*Написать конвертор валют.
Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
и получает в ответ соответствующую сумму.*/

/*
let num = +prompt('Укажите сумму');
let val = prompt('Укажите валюту конвертации: EUR, UAN или AZN');
let res;

let cur = {
    eur: 0.83,
    uan: 28.25,
    azn: 1.7,
}

if (val == 'EUR') {
    res = num * cur.eur;
    console.log(res);
} else if (val == 'AZN') {
    res = num * cur.azn;
    console.log(res);
} else if (val == 'UAN') {
    res = num * cur.uan;
    console.log(res);
} else {
    console.log('Введите корректные данные');
}*/


/*Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат.

let circle = +prompt('Укажите длинну окружности');
let sqv = +prompt('Укажите периметр квадрата');

if (circle <= sqv) {
    console.log('Поместится');
} else {
    console.log('Не поместится');
}*/



