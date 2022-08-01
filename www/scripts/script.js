$(document).ready(function(){

  $('.js-header-burger').on('click', function(){

    $('.js-header-menu').slideToggle();

  })


  $('.js-rewiews-wrap').slick({
  });


  $('.js-tabs-link').on('click', function(){
    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');

  })



})
