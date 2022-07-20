// Менюшка
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
// КнопОчка
document.querySelector(".tariff__button").onclick = function () {
  document.querySelector(".button__float").style.opacity = "0";
  document.querySelector(".button__float").style.top = "-45px";
};
