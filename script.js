$(function () {
    $(window).on("scroll", function () {
        let btn = $(".btn").offset().top;

        let wh = $(window).height();

        let position = $(window).scrollTop();
       
        if (position + wh >= btn) {
            $(".btn").removeClass("btn");
        }
    })

    $("button").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    })

    $(".question").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("on");
    })
})