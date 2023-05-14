$('.slider-container').slick({
    dots: true,
    vertical: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
});


/* slider-animation */
$('.slick-arrow').on("click", function () {
    $(".slick-dots li").addClass("slide-active ");
    setTimeout(function () {
        $(".slick-dots li").removeClass("slide-active ");
    }, 100);
})


/* handler mobile menu  */

$(".ri-menu-line").on("click", () => {
    $(".menu").toggle("active")
})

