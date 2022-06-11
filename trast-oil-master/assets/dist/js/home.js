$(document).ready(function () {

   $('.reviews__carousel').slick({
      slidesToShow: 1,
      dots: false,
      infinite: true,
      fade: true,
      prevArrow: $('.reviews__arrow--left'),
      nextArrow: $('.reviews__arrow--right')
   });

   $('.certificates__carousel').slick({
      slidesToShow: 4,
      dots: false,
      // centerMode: true,
      // focusOnSelect: true,
      infinite: true,
      prevArrow: '<button type="button" class="button-arrow button-arrow--left certificates__arrow certificates__arrow--left"><i class="icon-right-open"></i></button>',
      nextArrow: '<button type="button" class="button-arrow certificates__arrow certificates__arrow--right"><i class="icon-right-open"></i></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

   // $('.main-banner__carousel').slick({
   //    slidesToShow: 3,
   //    focusOnSelect: true,
   //    dots: false,
   //    centerMode: true,
   //    centerPadding: '0',
   //    infinite: true,
   //    arrows: false,
   //    variableWidth: true
   //    // fade: true,
   //    // prevArrow: $('.reviews__arrow--left'),
   //    // nextArrow: $('.reviews__arrow--right')
   // });

   // $('.certificates__item .slick-slide .slick-active:nth-of-type(4)').css('transform', 'scale(1.2)');
   // $('.certificates__carousel').find('.slick-active').click(function () {
   //    // var indexItem = $(this).index();
   //    if($('.slick-active').index(7)){
   //       console.log('да')
   //    } else {
   //       console.log('net')
   //    }
   //    // console.log(indexItem);
   //
   // });


   // $('.certificates__carousel .certificates__item').each(function (index) {
   //    $(this).find('.slick-active:eq(-2)').css('transform', 'scale(1.2)');
   // });


   /* курсив для текста второго <li> в каждом <ul class="nav"> */
   // $("ul.nav").each(function(index) {
   //    $(this).find("li:eq(1)").css( "fontStyle", "italic" );
   // });


   // $('.certificates__carousel').find('.slick-active').click(function () {
   //    if ($('.slick-active').index(3)){
   //       alert('lox')
   //    } else {
   //       console.log('2')
   //    }
   // })


   $('.main-banner__carousel').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '0',
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      appendDots:$(".main-banner__dots"),
      dotsClass: 'main-banner__dots',
      customPaging: function (slider, i) {
         var current = i + 1;
         current = current < 10 ? "0" + current : current;
         var thumb = $(slider.$slides[current]).data();
         return '<button type="button" class="main-banner__dot-item">' + current + '</button>';
      },
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               centerMode: false,
               variableWidth: false
            }
         }
      ]
   });
});



