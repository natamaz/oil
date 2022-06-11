$(document).ready(function () {

   jcf.replaceAll();

   $('.accordeon .accordeon__wrapper-icon').click(function () {
      $(this).toggleClass('accordeon__head--active').parents('.accordeon__item').find('.accordeon__body').slideToggle();
      $('.accordeon .accordeon__wrapper-icon').not(this).removeClass('accordeon__head--active').parents('.accordeon__item').find('.accordeon__body').slideUp();
   });

   var $anchor = $( '.js-anchor' );

   if ( $anchor.length ) {
      $anchor.on('click', function(event) {

         event.preventDefault();
         var $that = $( this ), hb = $('body, html');

         if ( $that.is( 'button' ) ) {
            hb.stop().animate({ scrollTop: $( '.' + $that.data( 'id' ) ).offset().top }, 1000, 'swing');
         } else if ( $that.is( 'a' ) ) {
            hb.stop().animate({ scrollTop: $( '.' + $that.attr( 'href' ).replace('#', '') ).offset().top }, 1000, 'swing');
         }

      });
   }


});