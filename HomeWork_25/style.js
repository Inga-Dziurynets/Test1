// Создать объект, описывающий автомобиль
// производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

/*
let car = {
    manufacturer: "Mazda",
    model: "CX-3",
    yearEnter: 2014,
    speed: 90,

    showInfo: function () {
        console.log("make: " + this.manufacturer + ", " + " model: " + this.model + ", " + "year of manufacturer: " + this.yearEnter + ", " + "speed: " + this.speed + " km/h");

    },
    calcTime: function () {
        let distance = 500;
        let time = (distance / this.speed) + ((distance / this.speed) / 4);
        let time2 = time * 60 * 60;
        let hour = Math.floor(time2 / 60 / 60);
        let min = Math.floor((time2 / 60) - (hour * 60));
        return console.log(`Водителю необходимо проехать расстояние ${distance} км. за ${hour} часов ${min} минут.`);

    },
}
*/

//car.showInfo()  выводит информацию об авто на экран
//car.getTime()  выводит информацию о времени на экран



// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;
/*

let num = {
    numerator: 10,
    denominator: 6,
    getSum: function () {
        this.s = this.numerator + this.denominator;
        return this.s;
    },
    getMin: function () {
        this.min = this.numerator - this.denominator;
        return this.min;
    },
    getMulti: function () {
        this.multi = this.numerator * this.denominator;
        return this.multi;
    },
    getDivision: function () {
        this.d = this.numerator / this.denominator;
        return this.d;
    },
}
*/
// num.getSum();
// console.log(num.s);

// num.getMin();
// console.log(num.min);

// num.getMulti();
// console.log(num.multi);

// num.getDivision();
// console.log(num.d);