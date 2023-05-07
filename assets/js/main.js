"use strict";
// scroll-top btn start
$(".top-btn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end
// slick slider start
$(document).ready(function(){
  $('.testimonial-area').slick({
    autoplay:true,
    prevArrow: ".left-arrow-testimonial",
    nextArrow:  ".right-arrow-testimonial",
    slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots:true,
      }
    }
  ]
  });});
// slick slide end

/* isotop-filter start */
// init Isotope
var $grid = $('.portfolio-grid').isotope({
  // options
  itemSelector: '.portfolio-item'
});
$('.portfolio-grid').isotope({
  // options
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.filter-button').on( 'click',function() {
  $('.filter-button').removeClass('active');
  $(this).addClass('active');
});

/* isotop-filter end */