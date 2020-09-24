$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="../img/arrow-left.svg" class="slider-arrows slider-arrows__left "></img>',
    nextArrow:
      '<img src="../img/arrow-right.svg"  class="slider-arrows slider-arrows__right"></img>',
    asNavFor: ".slider-dots",
  });
  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
  $(".serf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img src="../img/arrow-left.svg" class="slider-arrows slider-arrows__left "></img>',
    nextArrow:
      '<img src="../img/arrow-right.svg"  class="slider-arrows slider-arrows__right"></img>',
    asNavFor: ".slider-map__wrapper",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".slider-map__wrapper").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".serf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".holder-slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="../img/arrow-left.svg" class="slider-arrows slider-arrows__left "></img>',
    nextArrow:
      '<img src="../img/arrow-right.svg"  class="slider-arrows slider-arrows__right"></img>',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-down"><img class="minus" src="../img/minus.svg" alt=""></img></div><div class="quantity-button quantity-up"><img class="plus" src="../img/plus.svg" alt=""></img></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".minus, .plus").click("on", () => {
    let sum =
      $(".quantity__night").val() *
      $(".quantity__night").data("night") *
      $(".quantity__guests").val() *
      $(".quantity__guests").data("guest");
    $(".hotel-price").html("$" + sum);
  });
  let sum =
    $(".quantity__night").val() *
    $(".quantity__night").data("night") *
    $(".quantity__guests").val() *
    $(".quantity__guests").data("guest");
  $(".hotel-price").html("$" + sum);

  $(".surfbord__box").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-burger").on("click", function () {
    $(".menu").toggleClass("active");
  });
  new WOW().init();
});
