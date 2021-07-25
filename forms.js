// блок выборки элементов
const form = document.querySelector(".js-register-form");

// блок подписок
form.addEventListener("submit", onFormSubmit);

// блок обработчиков этих подписок
function onFormSubmit(event) {
  // запретить перезагрузку страницы
  event.preventDefault();

  // formData собирает данные из всех
  // интерактивных элементов формы

  const formData = new FormData(event.currentTarget);

  // в консоли formData появится как пустой обьект , но на самом деле он не пустой.
  // Усли его развернуть мы увидим всё, что в нём есть. В частности forEach.

  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> value", value);
    console.log("onFormSubmit -> name", name);
  });
}
