$(document).ready(function () {

  // 點擊漢堡選單顯示nav
  $('.home__burger').on('click', function () {
    $(".home__burger").toggleClass('is-active');
    $('.menu').toggleClass('is-active');
    $('.menu__list').toggleClass('is-active');
  });

  // 切換list內容
  let index = 0;
  // $('.search__item').eq(index).addClass('is-active');
  $('.search__content').eq(index).show();
  // $('.querylist__content').eq(index).show();

  $('.search__item').on('click', function () {
    index = $(this).index();

    $('.search__item').eq(index).addClass('is-active').siblings().removeClass('is-active');

    // 首頁查詢
    $('.search__content').hide();
    $('.search__content').eq(index).fadeIn();

    // 土地查詢
    $('.querylist__content').hide();
    $('.querylist__content').eq(index).fadeIn();

  });

  // 電腦版-點擊查詢顯示對應內容結果
  $('.form__send').on('click', function () {
    let id = $(this).data('id');
    console.log(id);
    $(id).addClass('is-active');
  })

  // 手機版-PC-點擊查詢顯示對應內容結果
  $('.mobile-form__send').on('click', function () {
    let id = $(this).data('id');
    console.log(id);
    $(id).addClass('is-active');

  })

  //當滑動到特定區塊時加入特定Class
  $(window).scroll(function () {

    if ($(window).scrollTop() >= $('.search__list').offset().top) {
      $('.header__scroll').addClass('is-active');
    } else {
      $('.header__scroll').removeClass('is-active');
    }

  });

  //點擊滑動到特定區塊
  $('.header__scrollArrow').on('click', function (e) {

    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('.main').offset().top
    }, 700, 'swing');

  });

});