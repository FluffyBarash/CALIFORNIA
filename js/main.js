// ###################_Variables_#######################################################;

const burger = document.querySelector(".burger");
const burgerLineOne = document.querySelector(".burger__line-1");
const burgerLineTwo = document.querySelector(".burger__line-2");
const burgerLineThree = document.querySelector(".burger__line-3");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const html = document.querySelector("html");
const search = document.querySelector("#search");
const magnifier = document.querySelector("#magnifier");
const searchSelectionOne = document.querySelector("#searchSelectionOne");
const searchSelectionTwo = document.querySelector("#searchSelectionTwo");
const searchSelectionThree = document.querySelector("#searchSelectionThree");
const searchSelectionFour = document.querySelector("#searchSelectionFour");
const searchSelectionFive = document.querySelector("#searchSelectionFive");
const searchSelectionSix = document.querySelector("#searchSelectionSix");
const searchSelectionSeven = document.querySelector("#searchSelectionSeven");
const searchSelectionEight = document.querySelector("#searchSelectionEight");
const searchSelectionNine = document.querySelector("#searchSelectionNine");
let burgerCounter = 0;

// ###################_Search_#######################################################;

searchSelectionOne.addEventListener("click", () => {
  search.value = "Iphone";
});
searchSelectionTwo.addEventListener("click", () => {
  search.value = "Charger";
});
searchSelectionThree.addEventListener("click", () => {
  search.value = "Gift";
});
searchSelectionFour.addEventListener("click", () => {
  search.value = "Google Pixel 3";
});
searchSelectionFive.addEventListener("click", () => {
  search.value = "Keyboard";
});
searchSelectionSix.addEventListener("click", () => {
  search.value = "Keyboard";
});
searchSelectionSeven.addEventListener("click", () => {
  search.value = "Iphone 12";
});
searchSelectionEight.addEventListener("click", () => {
  search.value = "Laptop";
});
searchSelectionNine.addEventListener("click", () => {
  search.value = "Mobile";
});

magnifier.addEventListener("click", () => {
  search.placeholder = "Search keyword";
  search.value = "";
});

// ###################_Burger_#######################################################;

burger.addEventListener("click", () => {
  burgerCounter += 1;
  burgerLineOne.classList.toggle("burger__line-1_animation");
  burgerLineTwo.classList.toggle("burger__line-2_animation");
  burgerLineThree.classList.toggle("burger__line-3_animation");
  menu.classList.toggle("menu__descent");
  html.style.overflowY = "hidden";
  if (burgerCounter == 2) {
    html.style.overflowY = "auto";
    burgerCounter = 0;
  }
});

// ###################_Loading_#######################################################;

window.onload = function () {
  let preloader = document.querySelector(".preloader");

  setTimeout(() => {
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
    preloader.classList.add("hide-preloader");
    new WOW().init();
    setTimeout(() => {
      preloader.classList.add("preloader-hidden");
    }, 950);
  }, 2000);
};

// ###################_Cap_#######################################################;

window.onscroll = function showHeader() {
  let header = document.querySelector(".header");

  if (window.pageYOffset > 150) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
};

// ###################_Slick-Slider_#######################################################

$(function () {
  $(".title__swiper").slick({
    dots: true,
    arrows: true,
    infinite: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 10000,
  });
});
