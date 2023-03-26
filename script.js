$(function () {
  // スクロール
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

// スライド
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
    // let index=0;
    // let slideMax=$(".slide").length;
    // // console.log(slideMax);
    // $('.right-arrow').on('click',function () {
    //     if (index !== slideMax-1) {
    //       index++;
    //       num = index * -1 * 100;
    //       $('.slide-container').css({'transform':`translateX(${num}%)`});
    //     }
    //   })  
    // $('.left-arrow').on('click',function () {
    //     if (index !== 0) {
    //       index--;
    //       num = index * -1 * 100;
    //       $('.slide-container').css({'transform':`translateX(${num}%)`})
    //     }
    // })
    
// Modal
    $('.modal-btn1').on('click',function () {
        $('.modal-container1').addClass('on');
      });
    
      $('.close-btn-wrap').on('click',function () {
        $('.modal-container1').removeClass('on');
      })

      $('.modal-btn2').on('click',function () {
        $('.modal-container2').addClass('on');
      });
    
      $('.close-btn-wrap').on('click',function () {
        $('.modal-container2').removeClass('on');
      })
      $('.modal-btn3').on('click',function () {
        $('.modal-container3').addClass('on');
      });
    
      $('.close-btn-wrap').on('click',function () {
        $('.modal-container3').removeClass('on');
      })
})