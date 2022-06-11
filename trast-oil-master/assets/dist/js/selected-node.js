$(document).ready(function () {
   $('.recommendations__carousel').slick({
      slidesToShow: 3,
      dots: false,
      infinite: true,

      prevArrow: '<button type="button" class="button-arrow button-arrow--left recommendations__arrow recommendations__arrow--left"><i class="icon-right-open"></i></button>',
      nextArrow: '<button type="button" class="button-arrow recommendations__arrow recommendations__arrow--right"><i class="icon-right-open"></i></button>',
      responsive: [
         {
            breakpoint: 1434,
            settings: {
               slidesToShow: 2,
               arrows: true
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
               arrows: false
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false
            }
         }
      ]
   });

   $('.reviews__carousel').slick({
      slidesToShow: 1,
      dots: false,
      infinite: true,
      fade: true,
      prevArrow: $('.reviews__arrow--left'),
      nextArrow: $('.reviews__arrow--right')
   });
});