document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const qaItem = this.closest(".qa_item");

      // 開閉切り替え
      qaItem.classList.toggle("active");

      // アイコン回転のクラス切り替え
      this.classList.toggle("open");
    });
  });
});

$(function () {
  $('.main_slick').slick({
    autoplay: true,
    adaptiveHeight: true,
    arrows: true, // ← → 表示
    dots: true,   // ●●● 表示
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