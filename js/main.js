$(document).ready(() => {
  var navigation_menu = $("#navigation_menu");
  var page_container = $("#page_container");
  var nav_escape_items = $(".nav-escape");
  var navigation_ham_menu = $("#navigation_menu .navbar-toggler");

  navigation_ham_menu.click((event) => {
    var is_collapsed = navigation_ham_menu.hasClass("collapsed");
    console.log(is_collapsed);
    if (is_collapsed) {
      navigation_ham_menu.removeClass("collapsed");
      navigation_ham_menu.removeClass("mx-auto");
      navigation_menu.removeClass("collapsed");
      nav_escape_items.addClass("collapsed");
    } else {
      navigation_ham_menu.addClass("collapsed");
      navigation_ham_menu.addClass("mx-auto");
      navigation_menu.addClass("collapsed");
      nav_escape_items.removeClass("collapsed");
    }
  });
});
