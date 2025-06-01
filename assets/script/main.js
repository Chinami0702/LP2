
$(function () {
  $(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('.TopYajirushi_wrapper').fadeIn();
  } else {
    $('.TopYajirushi_wrapper').fadeOut();
  }
});

  $(".qa_item_box").on("click",function(){
    $(this).closest(".qa_item").toggleClass("active");
    $(this).find(".toggle-btn").toggleClass("open");  
  });
  $('.main_slick').slick({
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img src="/assets/image/arrow-left-circle-fill.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/arrow-right-circle-fill.png" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});