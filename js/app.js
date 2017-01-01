var swiper = null;

$(document).ready(function(){
    swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: false,
            spaceBetween: 0,
            keyboardControl: false,
            spaceBetween: 0,
            simulateTouch:false
        });

    swiper.slideTo(0, 1);
   
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