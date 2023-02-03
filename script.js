$(function(){
    $("button").on("click",function(){
        $("body,html").animate({scrollTop:0},500);
    })
    
    $(".question").on("click",function(){
        $(this).next().slideToggle();
        $(this).toggleClass("on");
    })
})