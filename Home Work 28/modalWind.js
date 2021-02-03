// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
// На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.


let modal = document.getElementById("modal");
let btn = document.getElementById("modal_btn");
let close = document.getElementsByClassName("close_modal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";

}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}