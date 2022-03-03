// 슬라이더
$(function(){
    $('.slider').slick({
        dots : true,
        arrows : true,
        dotsClass : "slick-dots",
        adaptiveHeight: true
    });
})

// 제목을 누르면 첫 페이지로 이동
$('.title').on('click',function(){
    $('html').scrollTop(0);
})

// 각 메뉴를 누르면 해당 위치로 이동
for(let i=0; i<".menu li".length; i++){
    $(".menu li").eq(i).click(function() {
            $('html').scrollTop($('.page-title').eq(i).offset().top)
    })
}


$('.hopper').hover(
    function() {
         $('.hopper').animate({'left': 200},600)
         $('.hopper-intro').animate({'left':770,'opacity': 1},600)
    }
)

$(window).on('scroll',function(){

    // navbar 크기 조절
    if ($(window).scrollTop() > 400) {
            $('.nav-bar').addClass('nav-bar-scr');
        } else {
            $('.nav-bar').removeClass('nav-bar-scr');
        }

    
    // 스크롤 시 기존 카드는 서서히 사라짐

    var y = -1/497*($(window).scrollTop()) + 2362/497
    var x = -1/344*($(window).scrollTop()) + 1461/172


    $('.work-box').eq(0).css('opacity', y)

    $('.work-box').eq(1).css('opacity', x)
    
    
    // 기존 카드의 크기도 작아짐

    if($(window).scrollTop() > 1992) {
        $('.work-box').eq(0).css('transform','scale(0.9)')
    } else {
        $('.work-box').eq(0).css('transform','scale(1)')
    }

    if($(window).scrollTop() > 2693) {
        $('.work-box').eq(1).css('transform','scale(0.9)')
    } else {
        $('.work-box').eq(1).css('transform','scale(1)')
    }


    // 매체에서의 호퍼 박스
    if ($(window).scrollTop()>= 4370) {
        $('.card-wrap').slice(0,2).css('top','0px')
    } else {
        $('.card-wrap').slice(0,2).css('top','150px')
    }

    if ($(window).scrollTop()>= 4752) {
        $('.card-wrap').slice(2,4).css('top','0px')
    } else {
        $('.card-wrap').slice(2,4).css('top','150px')
    }

    
// 스크롤 위치 확인 
//     $(window).on('scroll',function(){
//         console.log($('html').scrollTop())
//     })
});


// 스크롤 내리면 상단 메뉴바가 사라지고 스크롤을 올리면 메뉴바가 나타남
$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta

    if(wheel >0){
        $('.nav-bar').removeClass('nav-up').addClass('nav-down')
    } else {
        $('.nav-bar').removeClass('nav-down').addClass('nav-up')
    }
})




