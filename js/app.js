var swiper = null;

$(document).ready(function(){
    $(".loading").hide();
    $(".header").css('display', 'flex');
    $(".main-container").css('display', 'flex');
    if($(window).width() > 769){
        $(".header").css('height', ($(".header").width() * 0.33) + 'px');
    }
    else if($(window).width() > 461){
        $(".header").css('height', ($(".header").width() * 0.5) + 'px');
    }
    else{
        $(".header").css('height', ($(".header").width() * 0.8) + 'px');
    }
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
        if($( window ).width() < 900){
            $(".menu-content").css('height', $(".swiper-slide-active").height() + 'px');
        }     
    });
		
    swiper.on('onSlidePrevEnd', function () {
        $(".menu-nav-mobile select").val(swiper.activeIndex);    
        if($( window ).width() < 900){
            $(".menu-content").css('height', $(".swiper-slide-active").height() + 'px');
        }   
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
		
		$("#packman").css("transform", "translate(" + $(".swiper-pagination-bullet:nth(0)").position().left + "px, calc(" + $(".swiper-container2").height() + "px))");

        swiper2.on('onSlideNextStart', function () {
            var el = $(".top-mouth"),  
            newone = el.clone(true);          
            el.before(newone);      
            $(".top-mouth:last").remove();

            el = $(".bottom-mouth"),  
            newone = el.clone(true);          
            el.before(newone);      
            $(".bottom-mouth:last").remove();

            $("#topMouth").css("animation", "pacmanTopFrames 0.12s linear 8 alternate both");
            $("#bottomMouth").css("animation", "pacmanBottomFrames 0.12s linear 8 alternate both");
            $("#packman").css("transform", "translate(" + $(".swiper-pagination-bullet-active").position().left + "px, calc(" + $(".swiper-container2").height() + "px))");
		});
		
		swiper2.on('onSlidePrevStart', function () {
            var el = $(".top-mouth"),  
            newone = el.clone(true);          
            el.before(newone);      
            $(".top-mouth:last").remove();

            el = $(".bottom-mouth"),  
            newone = el.clone(true);          
            el.before(newone);      
            $(".bottom-mouth:last").remove();

            $("#topMouth").css("animation", "pacmanTopFramesBis 0.12s linear 8 alternate both");
            $("#bottomMouth").css("animation", "pacmanBottomFramesBis 0.12s linear 8 alternate both");
            $("#packman").css("transform", "translate(" + $(".swiper-pagination-bullet-active").position().left + "px, calc(" + $(".swiper-container2").height() + "px))");
		});
    });

    $(".menu-nav-mobile select").change(function (){
        move($(".menu-nav-mobile select").val());
        if($( window ).width() < 900){
            $(".menu-content").css('height', $(".swiper-slide-active").height() + 'px');
        }
    });

    var cardWidth = $(".card").width() + 20;
    if($( window ).width() > 1399){
        $(".card").css('height', (cardWidth * 0.8) + 'px');
    }
    else if($( window ).width() > 460){
        $(".card").css('height', cardWidth + 'px');
    }
    else{
        $(".card").css('height', (cardWidth * 0.6) + 'px');
    }

    if($( window ).width() > 1399){
        $(".bigger .card").css('height', (cardWidth * 0.9) + 'px');
    }
    else if($( window ).width() > 460){
        $(".bigger .card").css('height', (cardWidth * 1.1) + 'px');
    }
    else{
        $(".bigger .card").css('height', (cardWidth * 0.6) + 'px');
    }

    $(".header > img").css('opacity','1');
    
    fixSquareHeight();
    move(0);
    if($( window ).width() < 769){
        $(".location-map").css('min-height', $(".location-open").height() + 'px');
    }
    

    if($( window ).width() < 900){
        $(".menu-content").css('height', $(".swiper-slide-active").height() + 'px');
    }
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