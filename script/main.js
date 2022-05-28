/* GENERAL CHECK */
let menuToggle = document.querySelector("#menu-toggle");
/*HOME */
let home = document.querySelector("#menu-home-toggle");
let menuHome = document.querySelector("#menu-home");
/* NEWS */
let news = document.querySelector("#menu-news-toggle");
let menuNews = document.querySelector("#menu-news");
/*ANYTHING IN THE SUB-MENU */
let subMenuItems = document.querySelectorAll(".menu-beta-item")
/* OPEN FIRST BAR + closes everything*/
menuToggle.onclick = function () {
  if (menuToggle.className === "open") {
    menuHome.classList.remove("active");
    menuNews.classList.remove("active");
  }
  menuToggle.classList.toggle("open");
}
/*OPEN HOME SECONDBAR */
home.onclick = function () {
  if (menuToggle.className === "open") {
    menuHome.classList.add("active");
  }
};
/*OPEN NEWS SECONDBAR */
news.onclick = function () {
  if (menuToggle.className === "open") {
    menuNews.classList.add("active");
  }
};
/* close mobile bar if link clicked */
subMenuItems.forEach(element => element.onclick = function(){
  menuToggle.classList.remove("open");
  menuNews.classList.remove("active");
})
/* va fatta la stessa cosa con i successivi href */