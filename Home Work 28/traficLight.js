// 3. Создать HTML-страницу со светофором и кнопкой, 
// которая переключает светофор на следующий цвет.

let btn = document.getElementById("traficLight_btn");

let list = document.getElementsByClassName("light");
let color = document.querySelector(".light");

let i = -1;
function changeColor() {

    light = document.querySelectorAll('.light');
    let arr = ['red', 'yellow', 'green'];
    i++;
    if (light[i - 1]) light[i - 1].style.backgroundColor = '';
    if (i == arr.length) i = 0;
    light[i].style.backgroundColor = arr[i];

};