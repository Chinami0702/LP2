$(document).ready(function () {
  $(".qa_item_box").on("click", function () {
    console.log("クリックされた"); // ←これを追加

    const answer = $(this).next(".qa_answer");
    const btn = $(this).find(".toggle-btn");

    answer.slideToggle(300);
    btn.toggleClass("open");
  });
});
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.qa_item');
    item.classList.toggle('active');
  });
});
$(function () {
  $('.main_slick').slick({
    autoplay: true,
    adaptiveHeight: true,
    arrows: true, // ← → 表示
    dots: true,   // ●●● 表示
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});