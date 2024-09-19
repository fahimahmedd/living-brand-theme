$(function () {
  var swiper = new Swiper(".companySwipper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  });
  var swiper = new Swiper(".companySwipperRevrese", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  });

  var swiper = new Swiper(".featureSwipper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 500,
    loop: true,
    // autoplay: {
    //   delay: 1,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Back to Top
  var btn = $("#button-back");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // Header Fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  });
});

// Aos Animation
AOS.init();

// Arrow rotate
console.clear();
const element = document.querySelector(".element");
onmousemove = (e) => {
  let midPoint = window.innerWidth / 2;
  let midTopPoint = window.innerHeight / 2;
  element.style.transform = `rotate(${
    (e.clientX / midPoint - 1) * 100
  }deg) rotate(${(e.clientY / midTopPoint - 1) * 100}deg)`;
};
