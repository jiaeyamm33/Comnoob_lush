$(function(){
  //메인 휠 이벤트
  let stopScroll = 0;
  $(window).on('load', function(e){ // 페이지가 로딩되면
    if($(this).scrollTop() != 0){ // 현재 스크롤을 검증하여 
      stopScroll = 1;
    }
  });
  window.addEventListener('wheel',function(e){
    if(stopScroll == 0 && e.deltaY > 0 && $(this).scrollTop() == 0){
      e.preventDefault();
      $('html, body').animate({scrollTop: $('#main_video_box').height()-100}, 'slow');
      stopScroll = 1;
    }
  }, {passive:false});
  $(window).scroll(function(){
    if($(this).scrollTop() >= $('#main_video_box').height()-100){
      $('header').css('background-color','#000');
    } else {
      $('header').css('background-color','');
    }
  });
});