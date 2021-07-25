// const singleBtn = document.querySelector("#single");

// // Для обработчика события можно (и желательно)
// // использовать отдельную функцию, ссылку на которую
// // передаем вторым аргументом в addEventListener
// const handleClick = () => alert("CLICK!");

// singleBtn.addEventListener("click", handleClick);

// //========================================================
// // Можно вешать более одного обработчика на элемент,
// // даже на одно и тоже событие
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => alert("First callback!");
// const secondCallback = () => alert("Second callback!");
// const thirdCallback = () => alert("Third callback!");

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
// =========================================================
// =========================================================
//  Метод elem.addEventListener()
// Добавляет слушателя события на элемент.

// element.addEventListener(event, handler[, phase])
// event - имя события, строка, например click
// handler - ссылка на функцию, которую надо поставить обработчиком
// phase - необязательный аргумент, фаза, на которой обработчик должен сработать. Указывается крайне редко.

// получаю ссылки на кнопки

const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// removeListenerBtn.addEventListener("click", onRemoveListenerBtnClick);

// function onRemoveListenerBtnClick() {
//   console.log("click");
// }

// при клике на одну кнопку добавляю слушателя на другую
// targetBtn сработает только после клика на addListenerBtn

addListenerBtn.addEventListener("click", () => {
  console.log("вешаю слушателя события на целевую кнопку");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

//  теперь снимаем слушателя с targetBtn нажав на removeListenerBtn

removeListenerBtn.addEventListener("click", () => {
  console.log("снимаю слушателя событий с целевой кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

// пишем функцию которую передаём  вместо console.log в наших командах add и remove
// это внешняя независимая функция!!!!!!!

function onTargetBtnClick() {
  console.log("клик по целевой кнопке");
}
