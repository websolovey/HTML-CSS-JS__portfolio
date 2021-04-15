$(".menu__icon").on("click", function () {
  $(".block-menu").toggle(300);
  $(".menu__icon").toggleClass("menu--active");
  $("body").toggleClass("body__overflow-hidden");
  
});