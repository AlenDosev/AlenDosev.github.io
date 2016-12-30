var swiper = null;

$(document).ready(function(){
    swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: false,
            spaceBetween: 0,
            keyboardControl: false,
            spaceBetween: 0
        });

    swiper.slideTo(1, 1);

    $(".logo > div").css('opacity','1');

    fixSquareHeight();
    
});

function move(item){
    if(item == 1){
        $("#circle").css('margin-left', 'calc(50% - 120px)');
        swiper.slideTo(0, 500);
    }
    else if(item == 2){
        $("#circle").css('margin-left', 'calc(50% - 20px)');
        swiper.slideTo(1, 500);
    }
    else{
        $("#circle").css('margin-left', 'calc(50% + 80px)');
        swiper.slideTo(2, 500);
    }
}

function goTo(place){
    $("html, body").animate({ scrollTop: $("#" + place).offset().top - 50 }, "slow");
}

function fixSquareHeight() {
    var windowWidth = $(".main-content").width();

    if (windowWidth < 460) {
        $(".square").css('min-height', windowWidth + 'px');
        $(".half-square").css('min-height', (windowWidth * 0.75) + 'px');
    }
    else {
        $(".square").css('min-height', (windowWidth / 2) + 'px');
        $(".half-square").css('min-height', ((windowWidth / 2) * 0.75) + 'px');
    }  
}