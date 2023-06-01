document.getElementById("menu").onmouseover = function (event) {
  var target = event.target;
  if (target.className == "status") {
    var s = target.getElementsByClassName("option");
    closeMenu();
    s[0].style.display = "flex";
  }
};
document.onmousemove = function (event) {
  var target = event.target;
  console.log(event.target);
  if (target.className != "status" && target.className != "option") {
    closeMenu();
  }
};
function closeMenu() {
  var menu = document.getElementByClassName("bookinfo");
  var sub = document.getElementsByClassName("option");
  for (var i = 0; i < sub.length; i++) {
    sub[i].style.display = "none";
  }
}
