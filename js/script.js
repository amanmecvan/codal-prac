/*
You can import JS files with import { example } from "js/file.js";
*/

$(document).ready(function () {
  $(".menu-item").click(function () {
    const target = $(this).data("target");
    const submenu = $("#" + target);
    $(this).toggleClass("bg-[#3E4545]");
    submenu.toggleClass("hidden");
    $("#content").toggleClass("mt-[52px]");
    $("body").toggleClass("overflow-hidden");
  });

  $(".mobile-menu").click(function () {
    $(".main-menu").toggleClass("hidden");
  });

  if ($(window).width() <= 640) {
    const $pdcTop = $(".pdc-top");
    const $stickyAtc = $(".sticky-atc");
    const stickyOffset = $pdcTop.offset().top;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= stickyOffset) {
        $stickyAtc.hide();
      } else {
        $stickyAtc.show();
      }
    });
  }

  $(".accordion-header").click(function () {
    const content = $(this).next(".accordion-content");
    const plusIcon = $(this).find(".fa-plus");
    const minusIcon = $(this).find(".fa-minus");

    content.slideToggle();
    plusIcon.toggleClass("!hidden");
    minusIcon.toggleClass("!hidden");
  });
});
