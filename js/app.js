var swiper = null;

$(document).ready(function(){
    swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: false,
            spaceBetween: 0,
            keyboardControl: false,
            spaceBetween: 0,
            simulateTouch: false,
            touchMoveStopPropagation: true
        });

    swiper.slideTo(2, 1);

    swiper.on('onSlideNextEnd', function () {
        $(".menu-nav-mobile select").val(swiper.activeIndex);       
    });

    swiper.on('onSlidePrevEnd', function () {
        $(".menu-nav-mobile select").val(swiper.activeIndex);       
    });
   
    $('#myModal').on('shown.bs.modal', function () {
        swiper2 = new Swiper('.swiper-container2', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            keyboardControl: true,
            spaceBetween: 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    });

    $(".menu-nav-mobile select").change(function (){
        move($(".menu-nav-mobile select").val());
    });

    var cardWidth = $(".card").width() + 20;
    if($( window ).width() > 1399){
        $(".card").css('height', (cardWidth * 0.8) + 'px');
    }
    else if($( window ).width() > 460){
        $(".card").css('height', cardWidth + 'px');
    }
    else{
        $(".card").css('height', (cardWidth * 0.55) + 'px');
    }

    if($( window ).width() > 1399){
        $(".bigger .card").css('height', (cardWidth * 0.9) + 'px');
    }
    else if($( window ).width() > 460){
        $(".bigger .card").css('height', (cardWidth * 1.1) + 'px');
    }
    else{
        $(".bigger .card").css('height', (cardWidth * 0.55) + 'px');
    }

    $(".logo > div").css('opacity','1');

    fixSquareHeight();
    move(0);
});

function move(item){
    var leftPostion = $(".menu-nav-item:nth(" + item + ")").position().left;
    var itemWidth = $(".menu-nav-item:nth(" + item + ")").width() + 24;

    $("#circle").css('margin-left', ((leftPostion + (itemWidth/2)) - 20) + 'px');
    swiper.slideTo(item, 500);  
}

function goTo(place){
    $("html, body").animate({ scrollTop: $("#" + place).offset().top }, "slow");
}

function fixSquareHeight() {
    var windowWidth = $(".main-content").width();

    if (windowWidth < 460) {
        $(".square").css('min-height', windowWidth + 'px');
        $(".half-square").css('min-height', (windowWidth * 0.75) + 'px');
        $(".quarter-square").css('min-height', (windowWidth * 0.5) + 'px');
    }
    else {
        $(".square").css('min-height', (windowWidth / 2) + 'px');
        $(".half-square").css('min-height', ((windowWidth / 2) * 0.75) + 'px');
        $(".quarter-square").css('min-height', ((windowWidth / 2) * 0.5) + 'px');
    }  
}