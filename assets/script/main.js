$(document).ready(function () {
  $(".question").on("click", function () {
    console.log("クリックされた"); // ←これを追加

    const answer = $(this).next(".answer");
    const btn = $(this).find(".toggle-btn");

    answer.slideToggle(300);
    btn.toggleClass("open");
  });
});

  //  $(document).ready(function(){
  //     $('.main_review_container_box_box').slick({
      
  //   });
  // });
    $(document).ready(function(){
    $('.main_slick').slick({
      arrows: true,       // ← → 表示
      dots: true,         // ●●● 表示
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
  $('.main_slick').slick({
  arrows: true,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev">←</button>',
  nextArrow: '<button type="button" class="slick-next">→</button>'
});