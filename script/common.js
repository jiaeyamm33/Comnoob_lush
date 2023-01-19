// 상단 바로가기 버튼 스크롤 이벤트
$(document).ready(function(){
    //ios 넘침현상 제거
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);

    $(window).scroll(function(){
        let upScroll = $(this).scrollTop(); //세로스크롤 변수 담기
        // console.log(upScroll);
        if(upScroll>=820){ //스크롤값 820이상일 때 탑버튼 보이기
            $('.t_btn').css('display','inline');
        }else{
            $('.t_btn').css('display','none');
        }
    });
    //gnb 사이드메뉴
    let m_menu = document.getElementById('m_menu');
    m_menu.addEventListener('change', function(){
        if(m_menu.checked==true){
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = '';
        }
    });
});




/*
const searchParams = new URLSearchParams(location.search);

for (const param of searchParams) {
    console.log('param');
}

const locationSearchs = "?name=shop_list.html"
const 
*/