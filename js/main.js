$(document).ready(() => {
  var navigation_menu = $("#navigation_menu");
  var page_container = $("#page_container");
  var nav_escape_items = $(".nav-escape");
  var navigation_ham_menu = $("#navigation_menu .navbar-toggler");

  navigation_ham_menu.click((event) => {
    var is_collapsed = navigation_ham_menu.hasClass("collapsed");
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

  includeHTML();
});

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByClassName("w3-include-html");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-url");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-url");
          $(elmnt).removeClass("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
