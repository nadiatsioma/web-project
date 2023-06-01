$(document).ready(function () {
  // Приховування випадаючого меню при завантаженні сторінки
  $(".dropdown-menu-status").hide();
  // Відкриття/закриття випадаючого меню при натисканні кнопки
  $(".menu-status").click(function () {
    $(this).siblings(".dropdown-menu-status").toggle();
  });
  // Закриття випадаючого меню при кліку за межами меню
  $(document).click(function (event) {
    if (
      !$(event.target).closest(".menu-status").length &&
      !$(event.target).closest(".dropdown-menu-status").length
    ) {
      $(".dropdown-menu-status").hide();
    }
  });

  $(".social-buttons").socialMediaShareButton();
});
