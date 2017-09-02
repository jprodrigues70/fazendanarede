var header = document.getElementById('menu');
var menulogo = document.getElementById('menu-logo');

var el = document.scrollingElement || document.documentElement;
if (el.scrollTop >= 170) {
    header.setAttribute("class", "white-bg gt-top-menu xs-left fixed")
}
document.addEventListener("scroll", function() {
    if (el.scrollTop >= 170) {
      header.classList.remove("transparent")
      menulogo.classList.remove("hidden")
    } else {
      header.classList.add("transparent")
      menulogo.classList.add("hidden")
    }
});
