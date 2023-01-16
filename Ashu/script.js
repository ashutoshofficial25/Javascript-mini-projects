// "use strict";
const loginPage = document.querySelector(".login-page");
// const overlay = document.querySelector(".overlay");
// const openLogin = document.querySelector(".login");
// const closeLogin = document.querySelector(".overlay");

document.querySelector(".login").addEventListener("click", function () {
  console.log("btn clicked");
  document.querySelector(".login-page").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".overlay").addEventListener("click", function () {
  console.log("btn clicked");
  document.querySelector(".login-page").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !loginPage.classList.contains("hidden")) {
    console.log("enter pressed");
    document.querySelector(".login-page").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }
});
