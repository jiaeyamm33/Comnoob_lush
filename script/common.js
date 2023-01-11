// 상단 바로가기 버튼 스크롤 이벤트
$(document).ready(function(){

    $(window).scroll(function(){
        let upScroll = $(this).scrollTop(); //세로스크롤 변수 담기
        // console.log(upScroll);
        if(upScroll>=820){ //스크롤값 820이상일 때 탑버튼 보이기
            $('.t_btn').css('display','inline');
        }else{
            $('.t_btn').css('display','none');
        }
    });

});
