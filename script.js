$(function () {
    $(window).on("scroll", function () {
        let btn = $("button").offset().top;

        let position = $(window).scrollTop();

        if (position >= btn) {
            $("button").removeClass("btn");
        }
        //console.log(position);
        if (position == 0) {
            $("button").addClass("btn")
        }
    })

    $("button").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    })

    $(".question").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("on");
    })

    $('.slider').slick({})
})