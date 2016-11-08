
$(document).ready(function(){
    // var swiper = new Swiper('.swiper-container', {
    //         pagination: '.swiper-pagination',
    //         slidesPerView: 1,
    //         paginationClickable: true,
    //         spaceBetween: 30,
    //         keyboardControl: true,
    //         nextButton: '.swiper-button-next',
    //         prevButton: '.swiper-button-prev',
    //         spaceBetween: 0
    //     });
});

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() > $("#test").offset().top){
        $(".bla").css('opacity','1');
        $(".bla").css('margin-top','0px');
    }

  
});
