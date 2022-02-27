$(function(){
    $('.slider').slick({
        dots : true,
        arrows : true,
        dotsClass : "slick-dots",
        adaptiveHeight: true
    });
})

$('.title').on('click',function(){
    $('html').scrollTop(0);
})

for(let i=0; i<".menu li".length; i++){
    $(".menu li").eq(i).click(function() {
            $('html').scrollTop($('.page-title').eq(i).offset().top)
    })
}


$('.hopper').hover(
    function() {
         $('.hopper').animate({'left': 230},600)
         $('.hopper-intro').animate({'left':800,'opacity': 1},600)
    }
)

$(window).on('scroll',function(){

    // navbar 크기 조절
    if ($(window).scrollTop() > 400) {
            $('.nav-bar').addClass('nav-bar-scr');
        } else {
            $('.nav-bar').removeClass('nav-bar-scr');
        }

    
    //대표작
    //1865-2362 2578 - 2922

    var y = -1/497*($(window).scrollTop()) + 2362/497
    var x = -1/344*($(window).scrollTop()) + 1461/172
    var z = -1/4970*($(window).scrollTop()) + 1367/994
    var w = -1/3440*($(window).scrollTop()) + 3009/1720



    $('.work-box').eq(0).css('opacity', y)//.css('transform',`scale(${z})`)

    $('.work-box').eq(1).css('opacity', x)//.css('transform',`scale(${ww})`)

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

    $(window).on('scroll',function(){
        console.log($('html').scrollTop())
    })
});


// $('.card-wrap').on('click',function(){
//     $('.card-wrap').animate({'top' : 150},1000)

// })

// 스크롤에 따라 상단 메뉴바 숨기고 보이기

//1. 현재의 스크롤 위치를 기준점으로 저장
//2. 스크롤 이벤트 발생
//3. 스크롤이 멈춘 위치를 기준점과 비교
//4. scroll down, scroll up 조건 분기하여 동작 실행
//5. 현재 멈춘 스크롤 위치를 기준점으로 재설정



/*

var didScroll
var lastScrollTop = 0;
var delta = 5; //이벤트를 발생시킬 스크롤의 이동범위
var navbarHeight = $('header').outerHeight(); //영향 받을 요소를 선택

//스크롤 시 사용자가 스크롤 했다는 것을 알린다.
$(window).on('scroll', function(e){
    didScroll = true;
    
})

//0.25초 마다 스크롤 여부를 체크하여 스크롤 중이면 hasScrolled()를 실행하고 didscroll 상태를 재설정
setInterval(function() {
    if(didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

//동작 구현
function hasScrolled() {
    var st = $(this).scrollTop(); //현재 스크롤 위치를 지정 //scrollTop은 스크롤의 위치반환

    if(Math.abs(lastScrollTop - st) <= delta) //설정한 delta값보다 더 스크롤 되었는 지 확인
        return //Math.abs()는 절댓값 구할 수 있다.
    

    // 헤더의 높이보다 더 스크롤 되었는 지 확인하고 스크롤의 방향이 위인지 아래인지 확인
    if(st > lastScrollTop && st > navbarHeight) {
        $('.nav-bar').removeClass('nav-down').addClass('nav-up')
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.nav-bar').removeClass('nav-up').addClass('nav-down')
        }
    }

    //latScrollTop에 현재 스크롤 위치를 재설정
    lastScrollTop = st;
}

// 현재 스크롤 위치에서 스크롤 숫자가 작아지면 메뉴바 생성, 숫자가 늘어나면 메뉴바 없애기
//mousewheel 사용

//https://code-study.tistory.com/23
//https://velog.io/@nooroong/%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%97%90-%EB%B0%98%EC%9D%91%ED%95%98%EB%8A%94-sticky-header-%EB%A7%8C%EB%93%A4%EA%B8%B0


*/

$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta

    if(wheel >0){
        $('.nav-bar').removeClass('nav-up').addClass('nav-down')
    } else {
        $('.nav-bar').removeClass('nav-down').addClass('nav-up')
    }
})




