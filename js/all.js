$(document).ready(function () {

  // 點擊漢堡選單顯示nav
  $('.home__burger').on('click', function () {
    $(".home__burger").toggleClass('is-active');
    $('.menu').toggleClass('is-active');
    $('.menu__list').toggleClass('is-active');
  });

  // 切換搜尋list內容
  let index = 0;
  $('.search__item').eq(index).addClass('is-active');
  $('.search__content').eq(index).show();

  $('.search__item').on('click', function () {
    index = $(this).index();

    $('.search__content').hide();
    $('.search__content').eq(index).fadeIn();

    $('.search__item').removeClass('is-active');
    $('.search__item').eq(index).addClass('is-active');

    // $(this).siblings().find('.nav__link').removeClass('is-active');
    // $(this).find('.nav__link').toggleClass('is-active');

  });
});