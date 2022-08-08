$(document).ready(function(){

  // Меню

  $('.js-header-burger').on('click', function(){

    $('.js-header-menu').slideToggle();

  })

  // Фильтрация

    // $('.js-filter-link').on('click', function() {

    //   let filter = $(this).data('filter');

    //   $('.js-filter-link').removeClass('active');
    //   $(this).addClass('active');

    //   if (filter === 'all') {

    //     $('.js-portfolio-item').show();

    //     return;
    //   }


    //   $('.js.portfolio-item').each(function() {

    //     let type = $(this).data('type');

    //     if (filter === 'type') {
    //       $(this).show();
    //     } else {
    //       $(this).hide();
    //     }
    //   })
    // })


    $('.js-filter-link').on('click', function(){
      let filter = $(this).data('filter');

      $('.js-filter-link').removeClass('active');
      $(this).addClass('active');

      if (filter === 'all') {
        $('.js.portfolio-card').show();

        return;
      }
      $('.js.portfolio-card').each(function(){
        let type = $(this).data('type');
        if (filter === type) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });


  // Слик-слайдер

  $('.js-rewiews-wrap').slick({
  });


  // Табы

  $('.js-tabs-link').on('click', function(){
    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');

  })



})
