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
// $(document).ready(function(){
//   $('.main_slick').slick({
//     arrows: true, // ← → 表示
//     dots: true,   // ●●● 表示
//     infinite: true,
//     slidesToShow: 3, // デフォルトは3枚表示（PCなど大きい画面）
//     slidesToScroll: 1,
//     prevArrow: '<button type="button" class="slick-prev">←</button>',
//     nextArrow: '<button type="button" class="slick-next">→</button>',
//     responsive: [
//       {
//         breakpoint: 768, // 768px未満になったらこの設定に切り替わる
//         settings: {
//           slidesToShow: 1, // スマホでは1枚ずつ表示
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });
$(document).ready(function() {
  $('.main_slick').slick({
    arrows: true, // ← → 表示
    dots: true,   // ●●● 表示
    infinite: true,
    slidesToShow: 1, // デフォルトでは1枚表示
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // 768px以下でも1枚表示
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,  // 768px以上〜1920px未満で3枚表示
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});