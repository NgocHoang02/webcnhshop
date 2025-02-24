// Trượt
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector("#menu-icon");
let thanhdieuhuong = document.querySelector(".thanhdieuhuong");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  thanhdieuhuong.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  thanhdieuhuong.classList.remove("active");
};
