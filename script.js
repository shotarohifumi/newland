$(function () {
    $(window).on("scroll", function () {
        let btn = $(".figtop").offset().top;

        let position = $(window).scrollTop();

        if (position >= btn) {
            $(".figtop").removeClass("btn");
        }
        //console.log(position);
        if (position == 0) {
            $(".figtop").addClass("btn")
        }
    })

    $(".figtop").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
    })

    $(".question").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("on");
    })

    let index=0;
    let slideMax=$(".slide").length;
    // console.log(slideMax);
    $('.right-arrow').on('click',function () {
        if (index !== slideMax-1) {
          index++;
          num = index * -1 * 100;
          $('.slide-container').css({'transform':`translateX(${num}%)`});
        }
      })
    
    $('.left-arrow').on('click',function () {
        if (index !== 0) {
          index--;
          num = index * -1 * 100;
          $('.slide-container').css({'transform':`translateX(${num}%)`})
        }
    })

})