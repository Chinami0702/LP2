
$(function () {
    // スクロール位置が300pxを超えたら「.gototop」ボタンを表示し、それ以下なら非表示
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.gototop').fadeIn();
        } else {
            $('.gototop').fadeOut();
        }
    });

    // 質問ボックス（.qa_item_box）をクリックすると、次の要素（回答部分）を開閉し、アイコンも切り替え
    $(".qa_item_box").on("click", function () {
        const $content = $(this).next();
        const $icon = $(this).find(".toggle-btn"); 

        $content.slideToggle();
        $icon.toggleClass("open");
    });

    // スライダーの初期化（.main_slickに対してSlickライブラリを適用）
    $('.main_slick').slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows: true, 
        dots: true, 
        infinite: true, 
        slidesToShow: 3,
        slidesToScroll: 3, 
        prevArrow: '<img src="/assets/image/left.svg" class="slide-arrow prev-arrow">', 
        nextArrow: '<img src="/assets/image/right.svg" class="slide-arrow next-arrow">', 

        // ブレイクポイント768px以下では表示枚数などを変更（レスポンシブ対応）
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