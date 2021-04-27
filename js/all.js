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

    $('.search__item').eq(index).addClass('is-active').siblings().removeClass('is-active');
    console.log(this);
    $('.search__content').hide();
    $('.search__content').eq(index).fadeIn();

  });

  // 點擊查詢顯示對應內容結果
  $('.form__send').on('click', function () {
    let id = $(this).data('id');
    console.log(id);
    $(id).addClass('is-active');

  })

});